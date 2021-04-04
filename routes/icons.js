const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();
const ionicons = './svg/ionicons-5.2.3.designerpack/';

let icons = [];
router.get('/', (req, res) => {

    fs.readdir(ionicons).then((files) => {
        files.forEach(file => {
            fs.readFile(`./svg/ionicons-5.2.3.designerpack/${file}`, 'utf8').then((content) => {
                let iconName = file.replace(/\.svg$/, '');
                let id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()+1));
                icons.push({ id: id, iconName: iconName, iconContent: content });
            });
        }); 

        res.send(icons);
        icons = [];
    });


});

module.exports = router;
