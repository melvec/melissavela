const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);
//app.set('port', 80);
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Routes
app.use(require('./routes/'));

//Static files
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), ()=>{
   console.log('server on port', app.get('port'));

});