var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//route files
var dateRouter = require('./routes/index');

// Mount routers
app.use('/', dateRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
