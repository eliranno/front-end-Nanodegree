// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const port = 3000;


/* Middleware*/
const cors = require('cors');
const bodyParser = require('body-parser');


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

app.listen(port, () => {
    console.log("listening on port " + port);
});

app.get('/projectData', function(req, res, next) {
    res.status(200).send(projectData);
})

app.post('/projectData', (req, res) => {
    projectData = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    };
    console.log(projectData);
    res.status(200).send({
        sucess: true,
        message: "Data saved successfully",
        data: projectData
    });

});