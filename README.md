# orga-filer
![Build Status](https://travis-ci.org/julum/orga-filer.svg?branch=master) 
[![Coverage Status](https://coveralls.io/repos/julum/orga-filer/badge.svg?branch=master)](https://coveralls.io/r/julum/orga-filer?branch=master)
![Dependency Status](https://david-dm.org/julum/orga-filer.svg)

OpenSource project for viewing and organizing files on your system from the browser.

## Installation
Download the repository via `git clone https://github.com/julum/orga-filer.git` or as a zip file. 
Extract it on your server and run `npm install`

## Configuration

Before you start, you have to set up your base directory you want to display in browser.
For this, you can edit the `config/default.yaml` or create a new configuration file which you load
on startup (recommended).

### Base Directory
In your configuration file you need to set the variable `baseDir: path`. 

Example:
      
    baseDir:
      path: '/your/home/directory'
      

## Start the application
To start the application, go to the application base directory and run `node server.js`.
Then type into your browser `<server-address>:3000` and you see the files of your set directory.
Test test
