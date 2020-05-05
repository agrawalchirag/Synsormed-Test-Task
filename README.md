# Synsormed Test Task

This task takes a DB query result as input in JSON format and add filtered data to a CSV file.

## Problem Statement
You can find the problem statement here:- [problem statement](https://docs.google.com/document/d/1DR3nPLSfheTc2AnIp7YfVbKy29MVoTNxndEYR1Vzk4o/edit#)

## Installation

```bash
docker-compose build
```
Note: Depending on how you've installed docker on your system, you might see a `permission denied` error after running the above command. Try the commands from the Getting Started tutorial to verify your installation. If you're on `Linux`, you may need to prefix your docker commands with `sudo`.

## Run
```bash
docker-compose up
```
## Tests
```bash
docker-compose run web npm run test-dev
```
## Future Enhancements
* Input JSON can be automated directly fetch the query results from DB.
* Input files will be processed concurrently with background jobs.
* Scope can be for different types of submissions. Ex:- Blood Pressure, weight
* Add unit tests for other JS files. As of now, I only added tests for parser.
