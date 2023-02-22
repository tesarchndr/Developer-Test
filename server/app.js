
const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/index')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', router)

app.use((err, req, res, next) => {
    let status = 500
    let message = 'Internal Server Error'
    if(err.name === 'NotFound') {
        status = 404
        message = 'Data Not Found'
    }
    console.log(err);
    res.status(status).json({message: message})
})

app.listen(port, () => {
    console.log(`Good, you're listening to port ${port}!`);
})