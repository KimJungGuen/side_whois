const express = require('express');
const World = require('../Model/WorldModel'); 
const Views = '../View/';

module.exports = {
    index: function(req, res, next) {
        // res.render(Views + 'index.ejs');
        World.test().then((result) => {
            console.log(result);
            res.render(Views + 'index.ejs');
        });

    }
}