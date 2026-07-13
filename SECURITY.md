# Security Policy

This repository contains only the static HTML, CSS, and JavaScript files for the public [GEOS-Chem website](https://geoschem.github.io). It has no server-side code, database, user accounts, or authentication, so most classes of vulnerability (SQL injection, auth bypass, data breaches, etc.) do not apply. Relevant concerns here are mainly things like cross-site scripting opportunities in page content, vulnerable vendored JavaScript (e.g. the bundled Leaflet library), or exposed credentials/tokens committed by mistake.

## Supported Versions

There is only one deployed version of this site, built from the `main` branch. Security fixes are applied there; there are no older versions to maintain.

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for a suspected security vulnerability.

Instead, report it privately using [the GitHub private security advisories form](https://github.com/geoschem/geoschem.github.io/security/advisories/new) for this repository.  We will acknowledge your report and work to address confirmed issues.

For non-security bugs and general support requests, see [SUPPORT.md](SUPPORT.md) instead.
