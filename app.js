const express = require('express');
const app = express();
app.set('view engine','ejs');

app.use('/tipCalculator',require('./routes/api'))

const port = process.env.PORT||3000;

app.listen(port,()=>{
    console.log("running sucessfully");
})


