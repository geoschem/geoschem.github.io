#!/usr/bin/env python3
"""
display_loc.py: Creates a graph of the evolution of the number
of lines of code & comments in GEOS-Chem over time.

Calling sequence
python -m display_loc /path/to/YAML/output/from/cloc
"""

import os
from sys import argv
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from gcpy.util import read_config_file, verify_variable_type


def read_yaml_files(path):
    """
    Reads YAML output from cloc for multiple GEOS-Chem versions
    and returns the output in a nested dictionary.

    Args
    path    : str           : Path to YAML files

    Returns
    results : dict of dicts : Line count info for each version
    """

    results = {}

    for filename in sorted(list(os.listdir(path))):
        version = filename.strip("loc.").strip(".yml")
        filename = os.path.join(path, filename)
        if ".yml" in filename or ".yaml" in filename:
            results[version] = read_config_file(filename, quiet=True)

    return results


def get_code_and_comment_lines(info):
    """
    Returns the total number of comment and code lines
    summed over several categories.

    Args
    info      : dict : Dictionary with version metadata

    Returns
    n_comment : int  : Number of comment lines
    n_comment : int  : Number of code lines
    """
    n_comment = 0
    n_code = 0
    keys = ["Fortran 90", "Fortran 77", "C", "C++",
            "C/C++ Header", "Make" "CMake", "Python",
            "Bourne Shell", "Bourne Again Shell"]

    for key in keys:
        if key in info.keys():
            n_comment += info[key]["comment"]
            n_code += info[key]["code"]

    return n_comment, n_code


def extract_code_counts(data):
    """
    Extracts the version label, line counts of code & comments,
    plus commit time information from YAML files.

    Args
    data : dict of dicts : Nested dictionary w/ output from cloc
    """
    results = None

    # Loop over the items in the dictonary
    for (version, info) in data.items():

        # Return the number of comment lines and code lines
        n_comment, n_code = get_code_and_comment_lines(info)

        # Note: Wrap dictonary values in a list, which lets
        # pd.DataFrame know to expect only one row.
        dframe = pd.DataFrame({
            "version": [version],
            "unix_time": [np.datetime64(info["datetime"]["unix_time"], "s")],
            "release_date": [info["datetime"]["date"]],
            "n_comment": [n_comment],
            "n_code": [n_code],
        })

        # Combine version DataFrames into a single overall DataFrame
        if results is None:
            results = dframe
        else:
            results = pd.concat([results, dframe], ignore_index=True)

    return results.sort_values(by="unix_time", ascending=True)


def plot_code_and_comments(data):
    """
    Creates a quick-look plot from KPP-Standalone box model output.

    Args
    file_list : list : List of KPP-Standalone log files
    site_name : str  : Name of the site that you wish to plot
    label     : str  : Descriptive label for the data
    species   : str  : Name of the species that you wish to plot
    """

    # Figure setup
    plt.style.use("seaborn-v0_8-whitegrid")

    # Define a new matplotlib.figure.Figure object for this page
    # Landscape width: 11" x 8"
    fig = plt.figure(figsize=(11, 8))
    fig.tight_layout()

    # Create matplotlib axes object for this subplot
    # axes_subplot is of type matplotlib.axes_.subplots.AxesSubplot
    axes_subplot = fig.add_subplot(111)

    # Title for each subplot
    axes_subplot.set_title(
        "Lines of code and comments in GEOS-Chem Classic",
        weight='bold',
        fontsize=15,
   )

    # Code
    axes_subplot.plot(
        data[["unix_time"]],
        data[["n_code"]],
        color='b',
        lw=3,
        label=f"Lines of Code",
    )

    # Comments
    axes_subplot.plot(
        data[["unix_time"]],
        data[["n_comment"]],
        color='r',
        lw=3,
        label=f"Comments",
    )


    # Set Y axis labels
    axes_subplot.set_ylabel(
        "Lines",
        fontsize=15,
    )

    # Set X tick locations and labels
    years = ["2003", "2005", "2007", "2009", "2011", "2013",
             "2015", "2017", "2019", "2021", "2023", "2025"]
    axes_subplot.set_xticks(
        np.array(years, dtype="datetime64[Y]")
    )
    axes_subplot.set_xticklabels(
        years
    )
    axes_subplot.set_xlim(
        np.array(["2003", "2025"], dtype="datetime64[Y]")
    )
    plt.xticks(
        rotation=45,
        ha="right"
    )

    # Set Y tick locations
    axes_subplot.set_yticks(
        [0, 50000, 100000, 150000, 200000, 250000, 300000,
         350000, 400000, 450000, 500000, 550000 ]
    )

    # Set tick label sizes
    axes_subplot.tick_params(
        axis='both',
        which='major',
        labelsize=10
    )

    # Legend box
    plt.legend(
        ncol=1,
        bbox_to_anchor=(0.25, 0.85),
        bbox_transform=fig.transFigure,
        loc='upper center',
        framealpha=0.0,
        fontsize="large",
        facecolor="white",
        shadow=True,
    )

    # Show the plot
    plt.show()

    # Reset the plot style (this prevents the seaborn style from
    # being applied to other model vs. obs plotting scripts)
    plt.style.use("default")


def main(path):
    """
    Main program.  Calls routines to read an plot data.
    """
    verify_variable_type(path, str)

    data = read_yaml_files(path)
    data = extract_code_counts(data)

    plot_code_and_comments(data)

if __name__ == '__main__':

    if len(argv) == 1:
        raise ValueError("Usage: python -m display_loc /path/to/data")

    main(argv[1])
