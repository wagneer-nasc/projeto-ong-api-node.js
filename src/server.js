const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./database/index');
const app = express();

app.use(bodyParser.json());
app.use(cors()); 
app.use('/', require("./routes"));
app.listen(3003);