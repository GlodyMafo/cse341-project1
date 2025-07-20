const express = require('express');
const mongodb = require('./data/database');
const bodyParser = require ('body-parser')
const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json())
app.use((req,res,next)=>{
res.setHeader('Acces-Control-Allow-Origin','*');
res.setHeader(
    'Acces-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
)
res.setHeader(
    'Acces-Control-Allow-Methods',
    'GET,POST,PUT,DELETE,OPTIONS'
)

next();

})

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


