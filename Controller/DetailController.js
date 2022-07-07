const express = require('express');
const World = require('../Model/WorldModel'); 
const Views = '../View/';


module.exports = {
    insert: function(req, res, next) {
        return new Promise ((resolve, reject) => {
            const con = mysql.createConnection(db.dev);
            let body = req.body;

            con.query(
                `INSERT INTO world_cup(world_seq, world_cup_type, world_path) VALUE('${body.key}', ${body.type}, '${body.link}')`, (err, result, fields) =>
                {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            )
            con.end();
        });
    }


}