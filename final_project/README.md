# Travel App Project

## Overview
This travel app helps you plan your trips. Simply enter the desired trip location &amp; date; My Custom Travel App will display the current weather or weather forecast depending on the trip date and an image of the location using information obtained from external APIs.

## API(s) Used

* [Geonames API](http://www.geonames.org/export/web-services.html) - Geographical database from which the location data is pulled
* [Weatherbit API](http://api.weatherbit.io/v2.0/) - Weather API for current and future weather data
* [Pixabay API](https://pixabay.com/api/docs/) - RESTful interface for searching and retrieving free images and videos


## Instructions

1. Download or clone the project:
```
git clone https://github.com/saltamay/travel-app.git [folder_name]
```
2. Install dependencies
```
npm install --save-dev
```
3. Start the server
```
npm start
```
4. Setup the environment development or production
```
npm run build-dev
```
or 
```
npm run build-prod
```
5. Test with Jest
```
npm run test
```
