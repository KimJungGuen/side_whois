const express = require('express');
    app = express();
    http =  require('http').createServer(app);
    port = 8900;

const router = require('./Router/Router');
const path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'Public')));
app.use(router);

app.listen(port, () => {
    
});