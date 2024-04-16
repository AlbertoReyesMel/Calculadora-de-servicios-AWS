const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

router.get('/', (req, res)=>{
    res.render('index.ejs')
});

module.exports = router;