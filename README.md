![build](https://github.com/olev-mutso/a-cat-ham/actions/workflows/build-ui.yml/badge.svg)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Folev-mutso%2Fa-cat-ham%2Factions%2Fworkflows%2F141584469%2Fruns%3Fstatus%3Dcompleted%26per_page%3D1&query=%24.workflow_runs%5B0%5D.run_started_at&label=deployed%20at)

# a-cat-ham

A simple exam practice app containing questions and answers to the Estonia Amateur Radio license "A-Category".

## About this application

The intention of this application is to help radio amateurs in Estonia study for and pass the A-class exam. Because some amateurs living in Estonia may 
not have a strong command of Estonian, this application provides for easy translation management and modification of question and answer data.

## Exam content management

* All exam content is managed via a csv file: `eesti_a_kat_eksam.csv`
* Questions and and answers can be created and modified comfortably by editing `eesti_a_kat_eksam.csv` in a spreadsheet editor.
* Questions and answers can be translated into other languages by adding a new column to contain them.

