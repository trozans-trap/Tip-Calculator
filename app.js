const express = require('express');
const app = express();
app.set('view engine','ejs');


app.use('/tipCalculator',require('./routes/api'))
app.use(express.static(__dirname + '/public'));
const port = process.env.PORT||3000;

app.listen(port,()=>{
    console.log("running sucessfully");
})


