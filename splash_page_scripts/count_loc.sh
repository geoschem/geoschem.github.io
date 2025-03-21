#!/bin/bash

#============================================================================
# count_loc.sh: Uses cloc program to count lines of code in a repository.
#
# See: https://github.com/AlDanial/cloc
#============================================================================

function valid_tag() {

    #========================================================================
    # Determines if a tag is valid (i.e. is of the form X.Y.Z or vX.Y.Z
    #
    # 1st argument: tag name
    #========================================================================

    # 0 is invalid tag, 1 is valid tag
    result=0

    # Check the last character of the tag
    if [[ "${tag: -1}" =~ [a-zA-Z] ]]; then
    # Tag ends in a letter
    [[ "${tag}" =~ [Rr]elease     ]] && result=1
    [[ "${tag}" =~ [Pp]rovisional ]] && result=0
    [[ "${tag}" =~ [Cc]andidate   ]] && result=0
    [[ "${tag}" =~ final          ]] && result=0
    [[ "${tag}" =~ F[Ii]x         ]] && result=0
    [[ "${tag}" =~ Re-Release     ]] && result=0
    else
    # Tag ends in an number
    result=1
    [[ "${tag}" =~ alpha          ]] && result=0
    [[ "${tag}" =~ beta           ]] && result=0
    [[ "${tag}" =~ rc             ]] && result=0
    [[ "${tag}" =~ precision      ]] && result=0
    [[ "${tag}" =~ GCHP           ]] && result=0
    [[ "${tag}" =~ KT             ]] && result=0
    [[ "${tag}" =~ Run            ]] && result=0
    [[ "${tag}" =~ 1mo            ]] && result=0
    [[ "${tag}" =~ 1yr            ]] && result=0
    [[ "${tag}" =~ SEAC4RS        ]] && result=0
    [[ "${tag}" =~ Icarus         ]] && result=0
    [[ "${tag}" =~ GEOS           ]] && result=0
    [[ "${tag}" =~ HEMCO          ]] && result=0
    [[ "${tag}" =~ [Pp]atch       ]] && result=0
    [[ "${tag}" =~ Fix            ]] && result=0
    [[ "${tag}" =~ UT_rundir      ]] && result=0

    fi

    echo "${result}"
}


function count_lines() {

    #========================================================================
    # Uses cloc to count lines of code and saves output to YAML format.
    # as YAML files in a
    #
    # 1st argument: path to source code
    # 2nd argument: path where YAML files will be created.
    #========================================================================

    codeDir="${1}"                # Path to source code
    outputDir="${2}"              # Path where results will be written
    git_cmd="git -C ${codeDir}"   # Use Git on the source code path
    tags=$(${git_cmd} tag)        # List of Git tags
    echo $git_cmd
    
    # Start on the main branch
    ${git_cmd} checkout main --quiet 2>/dev/null

    # Loop over tags in the repository
    for tag in ${tags[@]}; do

        # If this script is being run on the GEOS-Chem (science codebase)
	# folder, skip versions 13 and 14.  These will have been picked
	# up when running the script on the GCClassic folder.
        if [[ "${codeDir}" =~ "GEOS-Chem" ]]; then
            if [[ "${tag:0:2}" == "13" ||  "${tag:0:2}" == "14" ]]; then
                continue
            fi
        fi
	
        # If the tag is a version we want to analyze, count lines
        result=$(valid_tag "${tag}")
        if [[ "x${result}" =~ "x1" ]]; then

            # Echo info
            outFile="${outputDir}/loc.${tag}.yml"
            echo "Counting lines of code at: ${tag} --> ${outFile}"

            # Check out a temporary branch at the tag and update submodules
            ${git_cmd} checkout tags/${tag} --quiet 2>/dev/null
            ${git_cmd} checkout -b temp_branch --quiet 2>/dev/null
            ${git_cmd} submodule update --init --recursive --quiet 2>/dev/null

            # Count lines of code and send results to a YAML file
            cloc --yaml "${codeDir}" --quiet --out="${outFile}"
	    
            # Get datetime info and append it to the YAML file
            dateStr=$(${git_cmd} log -1 --pretty=format:"%ci")
            unixStr=$(${git_cmd} show -s --format="%ct")
	    echo $dateStr $unixStr
            echo "datetime:"               >> "${outFile}"
            echo "  date: ${dateStr:0:10}" >> "${outFile}"
            echo "  unix_time: ${unixStr}" >> "${outFile}"

            # Check out main and remove the temporary branch
            ${git_cmd} checkout main --quiet 2>/dev/null
	    ${git_cmd} submodule update --init --recursive --quiet 2>/dev/null
            ${git_cmd} branch -D temp_branch --quiet 2>/dev/null
        fi
    done
}

function main() {

    #========================================================================
    # Main program
    #========================================================================

    codeDir=$(realpath "${1}")    # Path to source code
    outputDir=$(realpath "${2}")  # Path where results will be written

    # Throw error if codeDir is not passed
    if [[ "x${codeDir}" == "x" ]]; then
        echo "Usage: ./count_loc.sh CODE-DIR [OUTPUT-DIR]"
        return $?
    fi

    # If outputDir is not passed, default to current folder
    if [[ "x${outputDir}" == "x" ]]; then
        outputDir=$(realpath ".")
    fi

    # Create OutputDir if it doesn't exist
    if [[ ! -d "${outputDir}" ]]; then
        echo "Creating output directory: ${outputDir}"
        mkdir -p "${outputDir}"
    fi

    # Count lines of code at each tag and save to YAML format
    count_lines "${codeDir}" "${outputDir}"
}

# Call the main program
main ${@}
