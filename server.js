const express = require ('express');
const app = express();
const port = process.env.PORT || 5001;

app.use('/', require('./routes'));

app.listen(port , ()=>{
    console.log(`runing on port ${port}`);
    
})
