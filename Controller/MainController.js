const express = require('express');
const World = require('../Model/WorldModel'); 
const Views = '../View/';

module.exports = {
    index: function(req, res, next) {
        World.test().then((result) => {
            res.render(Views + 'index.ejs');
        });

    },

    write: function(req, res, next) {
        res.render(Views + 'write.ejs');
    },

    insert: function(req, res, next) {
        World.write(req).then((result) => {
            res.json({
                'msg': '저장되었습니다.'
            });
        }).catch((err) => {
            res.json({
                'msg': '저장에 실패했습니다.'
            });
        });
    },

    findWorld: (req, res, nexx) => {
        World.findWorld(req).then((result) => {
            res.json({
                'world_seq': result[0].world_seq,
                'title': result[0].world_name,
                'explan': result[0].world_explan
            });
        });
    }


}