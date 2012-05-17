:START
@echo off
cls
node jslint-runner.js ..\..\client\js\lima
node jslint-runner.js ..\..\client\js\example

@echo Press any key to re-run JsLint, or ctrl-c to quit.
pause > nul
GOTO START
