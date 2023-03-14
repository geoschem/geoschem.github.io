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
  <li class="menu-900 menu-path-front  first   odd  "><a href="index.html" >HOME</a></li>\
  <li class="menu-853549 menuparent    even  "><a  class="menu-heading">Introduction</a><span class="open-submenu"></span>\
    <ul>\
      <li class="menu-853682 menu-path-node-1585687  first   odd  "><a href="geos-welcome.html"  class="active">Welcome</a></li>\
      <li class="menu-853686 menu-path-node-1585688   even  "><a href="geos-overview.html" >Overview</a></li>\
      <li class="menu-853692 menu-path-node-1585689   odd  "><a href="geos-licensing.html" >GEOS-Chem Licensing</a></li>\
      <li class="menu-853669 menu-path-node-1585685   even  "><a href="geos-steering-cmte.html" >Steering Committee</a></li>\
      <li class="menu-853676 menu-path-node-1585686   odd  "><a href="geos-working-groups.html" >Working Groups</a></li>\
      <li class="menu-1116818 menu-path-https--geos-chemseasharvardedu-support-team   even   last "><a href="support-team.html" >Support Team</a></li>\
    </ul>\
  </li>\
  <li class="menu-853553 menuparent    odd  "><a  class="menu-heading">Research</a><span class="open-submenu"></span>\
    <ul>\
      <li class="menu-962010 menu-path-https--geoschemgithubio-geos-chem-people-projects-map-  first   odd  "><a href="https://geoschem.github.io/geos-chem-people-projects-map/"  title="">People and Projects</a></li>\
      <li class="menu-853555 menu-path-https--scholargooglecom-citations   even  "><a href="https://scholar.google.com/citations?user=ho-sNj4AAAAJ" >Publications</a></li>\
      <li class="menu-853561 menu-path-wikigeos-chemorg-GEOS-Chem_model_development_priorities   odd  "><a href="http://wiki.geos-chem.org/GEOS-Chem_model_development_priorities" >Model Development Priorities</a></li>\
      <li class="menu-854271 menu-path-node-1585793   even  "><a href="geos-chem-narrative.html"  title="">Narrative Description (and how to cite GEOS-Chem)</a></li>\
      <li class="menu-854273 menu-path-node-1585794   odd  "><a href="geos-new-developments.html" >New GEOS-Chem developments</a></li>\
      <li class="menu-853698 menu-path-wikigeos-chemorg-GEOS-Chem_newsletters   even   last "><a href="http://wiki.geos-chem.org/GEOS-Chem_newsletters" >GEOS-Chem Newsletters</a></li>\
    </ul>\
  </li>\
  <li class="menu-853557 menuparent    even  "><a  class="menu-heading">Meetings</a><span class="open-submenu"></span>\
    <ul>\
      <li class="menu-853700 menu-path-node-1585685  first   odd  "><a href="geos-steering-cmte.html#meetings" >Steering Committee Meetings</a></li>\
      <li class="menu-856309 menu-path-node-1585795   even  "><a href="geos-meetings-2020-gca.html"  title="">GCA2 Meeting (TBA)</a></li>\
      <li class="menu-1043764 menu-path-node-1644668   odd  "><a href="igc10.html"  title="">IGC10 Meeting (2022)</a></li>\
      <li class="menu-857188 menu-path-node-1586483   even  "><a href="geos-meetings-2020-gce.html" >GCE1 Meeting (2020)</a></li>\
      <li class="menu-857219 menu-path-node-1586486   odd  "><a href="geos-meetings-2019-igc9.html" >IGC9 Meeting (2019)</a></li>\
      <li class="menu-853559 menu-path-https--2acomucaredu-workshop-integration-geos-chem-ncar-models-agenda   even  "><a href="https://www2.acom.ucar.edu/workshop/integration-geos-chem-ncar-models-agenda" >NCAR-GEOS-Chem meeting (2018)</a></li>\
      <li class="menu-857304 menu-path-node-1586522   odd  "><a href="geos-meetings-2018-gca1.html" >GCA1 Meeting (2018)</a></li>\
      <li class="menu-858721 menu-path-node-1586817   even  "><a href="geos-meetings-2017-igc8.html" >IGC8 Meeting (2017)</a></li>\
      <li class="menu-858767 menu-path-node-1586831   odd  "><a href="geos-meetings-2015-igc7.html" >IGC7 Meeting (2015)</a></li>\
      <li class="menu-859545 menu-path-node-1586997   even  "><a href="geos-meetings-2013-igc6.html" >IGC6 Meeting (2013)</a></li>\
      <li class="menu-859913 menu-path-node-1587046   odd  "><a href="geos-meetings-2011-igc5.html" >IGC5 Meeting (2011)</a></li>\
      <li class="menu-859936 menu-path-node-1587057   even  "><a href="geos-meetings-2009-igc4.html" >IGC4 Meeting (2009)</a></li>\
      <li class="menu-860311 menu-path-node-1587125   odd  "><a href="geos-meetings-2007-igc3.html" >IGC3 Meeting (2007)</a></li>\
      <li class="menu-861155 menu-path-node-1587331   even  "><a href="geos-meetings-2005-igc2.html" >IGC2 Meeting (2005)</a></li>\
      <li class="menu-861301 menu-path-node-1587366   odd   last "><a href="geos-meetings-2003-igc1.html" >IGC1 Meeting (2003)</a></li>\
    </ul>\
  </li>\
  <li class="menu-853563 menuparent    odd  "><a  class="menu-heading">About GEOS-Chem</a><span class="open-submenu"></span>\
    <ul>\
      <li class="menu-853565 menu-path-wikigeos-chemorg-GEOS-Chem_versions  first   odd  "><a href="http://wiki.geos-chem.org/GEOS-Chem_versions" >Version History</a></li>\
      <li class="menu-1078417 menu-path-wikiseasharvardedu-geos-chem-indexphp-Guide_to_GEOS-Chem_simulations   even  "><a href="http://wiki.seas.harvard.edu/geos-chem/index.php/Guide_to_GEOS-Chem_simulations" >Simulations</a></li>\
      <li class="menu-853569 menu-path-wikigeos-chemorg-GEOS-Chem_benchmarking   odd  "><a href="http://wiki.geos-chem.org/GEOS-Chem_benchmarking"  title="">Benchmarking</a></li>\
      <li class="menu-1059479 menu-path-https--hemcoreadthedocsio   even  "><a href="https://hemco.readthedocs.io" >HEMCO</a></li>\
      <li class="menu-853575 menu-path-wikigeos-chemorg-Emissions_overview   odd  "><a href="http://wiki.geos-chem.org/Emissions_overview"  title="">Emissions Overview</a></li>\
      <li class="menu-853567 menu-path-wikigeos-chemorg-Guide_to_GEOS-Chem_performance   even  "><a href="http://wiki.geos-chem.org/Guide_to_GEOS-Chem_performance"  title="">Performance</a></li>\
      <li class="menu-1059482 menu-path-https--gchpreadthedocsio   odd  "><a href="https://gchp.readthedocs.io" >GCHP</a></li>\
      <li class="menu-853581 menu-path-wrfgeos-chemorg-   even  "><a href="http://wrf.geos-chem.org/" >WRF-GC</a></li>\
      <li class="menu-863342 menu-path-node-1587862   odd   last "><a href="logo.html" >GEOS-Chem logo</a></li>\
    </ul>\
  </li>\
  <li class="menu-853583 menuparent    even  "><a  class="menu-heading" title="">Documentation</a><span class="open-submenu"></span>\
    <ul>\
      <li class="menu-1059475 menu-path-https--geos-chemreadthedocsio-en-latest-geos-chem-shared-docs-supplemental-guides-related-docshtml#  first   odd  "><a href="https://geos-chem.readthedocs.io/en/latest/geos-chem-shared-docs/supplemental-guides/related-docs.html#" >User manuals for GEOS-Chem and related software</a></li>\
      <li class="menu-853587 menu-path-wikigeos-chemorg-   even  "><a href="http://wiki.geos-chem.org/" >GEOS-Chem Wiki</a></li>\
      <li class="menu-853591 menu-path-youtubegeos-chemorg-   odd  "><a href="http://youtube.geos-chem.org/" >GEOS-Chem Youtube channel</a></li>\
      <li class="menu-853593 menu-path-wikigeos-chemorg-GEOS-Chem_overview   even  "><a href="http://wiki.geos-chem.org/GEOS-Chem_overview#GEOS-Chem_Guides" >GEOS-Chem Guides</a></li>\
      <li class="menu-863363 menu-path-node-1587865   odd  "><a href="geos-presentations.html" >Presentations on new GEOS-Chem model developments</a></li>\
      <li class="menu-853595 menu-path-wikigeos-chemorg-Frequently_asked_questions_about_GEOS-Chem   even  "><a href="http://wiki.geos-chem.org/Frequently_asked_questions_about_GEOS-Chem" >GEOS-Chem FAQ</a></li>\
      <li class="menu-1059485 menu-path-https--geos-chemreadthedocsio-en-latest-gcc-guide-05-run-run-speeduphtml   odd  "><a href="https://geos-chem.readthedocs.io/en/latest/gcc-guide/05-run/run-speedup.html" >Speeding up GEOS-Chem</a></li>\
      <li class="menu-864126 menu-path-node-1588005   even   last "><a href="cubedsphere.html" >Cubed-sphere grid illustrations</a></li>\
    </ul>\
  </li>\
  <li class="menu-853602 menuparent    odd   last "><a  class="menu-heading">Software Tools</a><span class="open-submenu"></span>\
    <ul>\
      <li class="menu-853604 menu-path-wikigeos-chemorg-Python_tools_for_use_with_GEOS-Chem  first   odd  "><a href="http://wiki.geos-chem.org/Python_tools_for_use_with_GEOS-Chem" >GCPy and Python tools</a></li>\
      <li class="menu-1076200 menu-path-wikigeos-chemorg-Software_maintained_by_GEOS-Chem_community_members   even   last "><a href="http://wiki.geos-chem.org/Software_maintained_by_GEOS-Chem_community_members" >Tools maintained by GEOS-Chem users</a></li>\
    </ul>\
  </li>\
</ul>';

  // Write the HTML code into the document
  document.write( txt );
}

//-->
