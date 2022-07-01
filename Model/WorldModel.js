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
    }
}