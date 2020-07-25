    // Setup empty JS object to act as endpoint for all routes
    let tripData = {};

    // Require Express to run server and routes
    const express = require('express');
    const async = require('express-async-errors');
    const fetch = require('node-fetch');

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
    app.use(express.static('dist'));


    // Setup Server

    app.listen(port, () => {
        //console.log("listening on port " + port);
    });

    app.get('/', function(req, res) {
        res.status(200);
        res.sendFile('dist/index.html')
    });

    app.post('/forecast', async(req, res, next) => {
        if (req.body.endpoint !== " ") {
            const endpoint = req.body.endpoint;
            console.log("request forecast " + endpoint);
            try {
                const response = await fetch(endpoint);
                if (response.ok) {
                    const jsonRes = await response.json();
                    console.log(jsonRes);
                    res.status(201).send(jsonRes);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            res.status(400).json('Bad Request');
        }
    });


    app.post('/save', async(req, res, next) => {
        console.log("request to save trip ");
        try {
            tripData = req.body.trip;
            console.log(tripData);
            res.status(200).send("");
        } catch (error) {
            res.status(400).json("bad data");
            console.log(error);
        }
    });

    export { app }