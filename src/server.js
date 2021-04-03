const express = require('express');


// Server initialization
const app = express();
app.set('port', process.env.PORT || 3000); //if a port already exists, use it. if not, use 3000
require('./database');
//Middlewares


//Routes
// using this we can put the rest of the code inside the folder "routes"
app.get("/", (req, res) =>{
    res.send("<h1>Hello World</h1>");
});
//app.use(require('./routes/index'));
//app.use(require('./routes/meteors'));
//app.use(require('./routes/users'));


//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});