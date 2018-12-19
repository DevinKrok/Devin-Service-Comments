const express = require('express');
const app = express();
const port = 3001;

const db = require('./db/index.js');

app.get('/', (req, res) => {


    db.query('SELECT * FROM commentInfo', (err, res) => {
        if (err) {
          console.log(err);
          res.send('err');
        }
        res.send('Hello World!',res.rows[0])
      })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))