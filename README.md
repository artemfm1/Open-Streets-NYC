# Project Overview
deployed site:
https://artemfm1.github.io/Open-Streets-NYC/

## Project Name

# Open-Streets-NYC

The name of your project with deployed URL.

## Project Description

An application used for finding street openings for pedestrians and cyclists to use the roadbed of the street for social distancing during the COVID-19 crisis.

## API and Data Sample

https://data.cityofnewyork.us/resource/uiay-nctu.json

![image](https://user-images.githubusercontent.com/46007121/115155156-9a342780-a04c-11eb-8677-9b0e74bea4d8.png)


## Wireframes

![image](https://user-images.githubusercontent.com/46007121/115155509-4296bb80-a04e-11eb-9211-3f999801fb43.png)

### MVP/PostMVP

#### MVP 

MVP - To be able to search for "Open Street" locations by borough. This project used:
  - HTML, CSS, and JavaScript.
  - Axios request to pull API data
  - styleing with FLexblox
  - responsive design with media queries


#### PostMVP  

- Adding a date and calander option 
- Giving the user a map readout or a link to it

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|April 19| Project Approval/Core Application Structure (HTML, CSS, etc.) | Incomplete
|April 20| Pseudocode / actual code | Incomplete
|April 21| Initial Clickable Model/MVP  | Incomplete
|April 22| MVP/PMVP | Incomplete
|April 23| Presentations | Incomplete

## Priority Matrix

![image](https://user-images.githubusercontent.com/46007121/115883241-95d88780-a41b-11eb-8323-4c71fec857aa.png)


## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 2hrs| 2 |  2
| HTML | H | 2 hrs| 6 |  6
| JavaScript | H | 10 hrs| 20 |  20
| initaial CSS | H | 5 hrs| 3 |  3
| advanced CSS styling | H | 6 hrs| 8 | 8 
| debugging | H | 5 hrs| 3 | 3
| Total | H | 30 hrs| 42 |  42

## Code Snippet

![image](https://user-images.githubusercontent.com/46007121/115876506-66724c80-a414-11eb-9af5-ff4dfacb800a.png)




## Change Log
Intially I had to use `const smallArray = streetData.slice(0, 30)` to shorten the results, but using the set() method allowed me to filter out duplicates and render a complete list to the user. 
