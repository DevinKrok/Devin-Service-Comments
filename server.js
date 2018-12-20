const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
// const db = require('./db/index.js');
const knex = require('./db/knex.js');
const Promise = require("bluebird");

app.use(express.static('./client/dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/Comments', (req, res) => {

        knex.select().from('comments_info')
        .then( (rows)=>{res.send(rows)});
        
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))