// Import Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('./container');
const { upperCase } = require('lodash');

// Container Resolves
container.resolve(function(users){

    const app = SetupExpress();

    function SetupExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen(3000, function() {
            console.log('Listening on Port 3000');
        });

        ConfigureExpress(app);
        
        // Setup Router
        const router = require('express-promise-router')();
        users.SetsRouting(router);

        app.use(router);

    }

    
    function ConfigureExpress(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
    }

});


