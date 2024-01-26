<!--
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%% dropdown-menu.js -- JavaScript file to insert HTML code  %%%%
// %%%% for a dropdown menu into the GEOS-Chem web pages.        %%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Make sure all the dropdown menus go into hiding on page load
window.onload=show;

function inlineDropDownMenu() {
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%% Function to inline HTML code for the dropdown menus   %%%%
  // %%%% into the target page. (bmy, 3/20/08)                  %%%%     
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  // Define the text string.  Note, the "\"character must be used to continue one line to
  // the next (i.e. similar to Unix).  Also no space characters can follow the "\" character.
  "use strict";
  var txt ='<ul class="nice-menu nice-menu-down nice-menu-primary-menu" id="nice-menu-primary-menu">\
  <li class="menuparent"><a class="menu-heading" href="index.html" >HOME</a></li>\
  <li class="menuparent"><a class="menu-heading">Introduction</a>\
    <ul>\
      <li><a href="welcome.html">Welcome</a></li>\
      <li><a href="overview.html" >Overview</a></li>\
      <li><a href="license.html" >GEOS-Chem Licensing</a></li>\
      <li><a href="steering-committee.html" >Steering Committee</a></li>\
      <li><a href="working-groups.html" >Working Groups</a></li>\
      <li><a href="support-team.html" >Support Team</a></li>\
    </ul>\
  </li>\
  <li class="menuparent"><a class="menu-heading">Research</a>\
    <ul>\
      <li><a href="people.html"  title="">People and Projects</a></li>\
      <li><a href="https://scholar.google.com/citations?user=ho-sNj4AAAAJ" >Publications</a></li>\
      <li><a href="http://wiki.geos-chem.org/GEOS-Chem_model_development_priorities" >Model Development Priorities</a></li>\
      <li><a href="narrative.html"  title="">Narrative Description (and how to cite GEOS-Chem)</a></li>\
      <li><a href="new-developments.html" >New GEOS-Chem developments</a></li>\
      <li><a href="http://wiki.geos-chem.org/GEOS-Chem_newsletters" >GEOS-Chem Newsletters</a></li>\
    </ul>\
  </li>\
  <li class="menuparent"><a class="menu-heading">Meetings</a>\
    <ul>\
      <li><a href="steering-committee.html#meetings" >Steering Committee Meetings</a></li>\
      <li><a href="https://sites.wustl.edu/igc11/" title="">IGC11 Meeting (2024)</a></li>\
      <li><a href="gca2.html"  title="">GCA2 Meeting (TBD)</a></li>\
      <li><a href="gce2.html"  title="">GCE2 Meeting (2023)</a></li>\
      <li><a href="igc10.html"  title="">IGC10 Meeting (2022)</a></li>\
      <li><a href="gce1.html" >GCE1 Meeting (2020)</a></li>\
      <li><a href="igc9.html" >IGC9 Meeting (2019)</a></li>\
      <li><a href="https://www2.acom.ucar.edu/event/workshop/integration-geos-chem-ncar-models-agenda" >NCAR-GEOS-Chem meeting (2018)</a></li>\
      <li><a href="gca1.html" >GCA1 Meeting (2018)</a></li>\
      <li><a href="igc8.html" >IGC8 Meeting (2017)</a></li>\
      <li><a href="igc7.html" >IGC7 Meeting (2015)</a></li>\
      <li><a href="igc6.html" >IGC6 Meeting (2013)</a></li>\
      <li><a href="igc5.html" >IGC5 Meeting (2011)</a></li>\
      <li><a href="igc4.html" >IGC4 Meeting (2009)</a></li>\
      <li><a href="igc3.html" >IGC3 Meeting (2007)</a></li>\
      <li><a href="igc2.html" >IGC2 Meeting (2005)</a></li>\
      <li><a href="igc1.html" >IGC1 Meeting (2003)</a></li>\
    </ul>\
  </li>\
  <li class="menuparent"><a class="menu-heading">About GEOS-Chem</a>\
    <ul>\
      <li><a href="http://wiki.geos-chem.org/GEOS-Chem_versions" >Version History</a></li>\
      <li><a href="http://wiki.geos-chem.org/Guide_to_GEOS-Chem_simulations" >Simulations</a></li>\
      <li><a href="http://wiki.geos-chem.org/GEOS-Chem_benchmarking"  title="">Benchmarking</a></li>\
      <li><a href="https://hemco.readthedocs.io" >HEMCO</a></li>\
      <li><a href="http://wiki.geos-chem.org/Emissions_overview"  title="">Emissions Overview</a></li>\
      <li><a href="http://wiki.geos-chem.org/Guide_to_GEOS-Chem_performance"  title="">Performance</a></li>\
      <li><a href="https://gchp.readthedocs.io" >GCHP</a></li>\
      <li><a href="http://wrf.geos-chem.org/" >WRF-GC</a></li>\
      <li><a href="logo.html" >GEOS-Chem logo</a></li>\
    </ul>\
  </li>\
  <li class="menuparent"><a class="menu-heading">Docs</a>\
    <ul>\
      <li><a href="https://geos-chem.readthedocs.io/en/latest/geos-chem-shared-docs/supplemental-guides/related-docs.html#" >User manuals for GEOS-Chem and related software</a></li>\
      <li><a href="http://wiki.geos-chem.org/" >GEOS-Chem Wiki</a></li>\
      <li><a href="http://youtube.geos-chem.org/" >GEOS-Chem Youtube channel</a></li>\
      <li><a href="http://wiki.geos-chem.org/GEOS-Chem_overview#GEOS-Chem_Guides" >GEOS-Chem Guides</a></li>\
      <li><a href="presentations.html" >Presentations on new GEOS-Chem model developments</a></li>\
      <li><a href="http://wiki.geos-chem.org/Frequently_asked_questions_about_GEOS-Chem" >GEOS-Chem FAQ</a></li>\
      <li><a href="https://geos-chem.readthedocs.io/en/latest/gcc-guide/05-run/run-speedup.html" >Speeding up GEOS-Chem</a></li>\
      <li><a href="cube-sphere.html" >Cubed-sphere grid illustrations</a></li>\
    </ul>\
  </li>\
  <li class="menuparent"><a class="menu-heading">Tools</a>\
    <ul>\
      <li><a href="http://wiki.geos-chem.org/Python_tools_for_use_with_GEOS-Chem" >GCPy and Python tools</a></li>\
      <li><a href="http://wiki.geos-chem.org/Software_maintained_by_GEOS-Chem_community_members" >Tools maintained by GEOS-Chem users</a></li>\
    </ul>\
  </li>\
</ul>';

  // Write the HTML code into the document
  document.write( txt );
}

//-->
