const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use('/', require('./router'));
app.use(express.static('public'));

app.listen(5000, ()=>{
    console.log('SERVER corriendo en http://localhost:5000')
})