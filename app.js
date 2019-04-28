
const express = require('express')
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//routes
const testRoute = require('./api/routes/test');
const nameRoute = require('./api/routes/name');
const weatherRoute = require('./api/routes/weather');


//logs and allow json body 

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//handling CORS error

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headres', '*');
    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/test', testRoute);
app.use('/name', nameRoute);
app.use('/weather', weatherRoute);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message : error.message
        }
    })
})

module.exports = app;