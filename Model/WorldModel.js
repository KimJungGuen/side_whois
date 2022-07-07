const mysql = require('mysql');
const db = require('../Config/DB');

module.exports = {
    test: function() {
        return new Promise ((resolve, reject) => {
            const con = mysql.createConnection(db.dev);

            con.query(
                `SELECT * FROM world_cup`, (err, result, fields) =>
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
    },

    write: function(req) {
        return new Promise ((resolve, reject) => {
            const con = mysql.createConnection(db.dev);
            let body = req.body;

            con.query(
                `INSERT INTO world_cup(world_seq, world_name, world_explan) VALUE(${body.key}, '${body.title}', '${body.world_explan}')
                ON DUPLICATE KEY
                UPDATE world_name = '${body.title}', world_explan = '${body.world_explan}'`, (err, result, fields) =>
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
    },

    findWorld: (req) => {
        return new Promise ((resolve, reject) => {
            const con = mysql.createConnection(db.dev);
            let body = req.body;
            con.query(
                `SELECT * FROM world_cup WHERE world_seq = '${body.key}'`, (err, result, fields) =>
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