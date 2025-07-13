const express = require('express');
const mongodb = require('./data/database');
const app = express();
const port = process.env.PORT || 5001;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }

    else {
        app.listen(port, () => {
            console.log(`database is listened and server runing on port ${port}`);

        })
    }
})


