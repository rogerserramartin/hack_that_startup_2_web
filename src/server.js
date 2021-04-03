const express = require('express');


// Server initialization
const app = express();
app.set('port', process.env.PORT || 3000); //if a port already exists, use it. if not, use 3000

//Middlewares


//Routes


//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});