const express = require('express');
const route = require('../../routes/index');
const connect = require('../db/index');
const app = express();

//connect
connect()
 
app.use(
    express.urlencoded({
        extended: true, 
    })
);
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
const port = 3000;

//router
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 