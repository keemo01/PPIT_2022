const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//config to send files to browser
app.use(express.static(path.join(__dirname, '../../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//connecting application with mongodb
const myConnectionString = 'mongodb+srv://admin:Yassine12@cluster0.fj0zk.mongodb.net/crypto?retryWrites=true&w=majority'

//connectin with mongoose
mongoose.connect(myConnectionString);

//create a new database schema
const Schema = mongoose.Schema;

//generated schema
var cryptoSchema = new Schema({

    title: String,
    quantity: String,
    poster: String

});

//use the schema to create a new "crypto" database model.
var CryptoModel = mongoose.model("Crypto", cryptoSchema);

//route point
app.get('/api/crypto', (req, res) => {

    //callback function
    CryptoModel.find((err, data) => {
        res.json(data);
    })

})

//listens for put request to edit cryptos
app.put('/api/crypto/:id', (req, res) => {
    console.log('Updating Crypto: ' + req.params.id)

    //interact with database find and update field
    CryptoModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

//method to delete data// listens for http delete method
app.delete('/api/crypto/:id', (req, res) => {
    console.log("Delete Crypto: " + req.params.id);

    CryptoModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

//listen for get request
app.get('/api/crypto/:id', (req, res) => {
    //function passes id
    console.log(req.params.id);

    //use id to find in database
    CryptoModel.findById(req.params.id, (err, data) => {
        //send data back
        res.json(data);
    })
})


//listen for post request
app.post('/api/crypto', (req, res) => {

    //log console
    console.log('Crypto Recieved!');
    console.log(req.body.title);
    console.log(req.body.quantity);
    console.log(req.body.poster);

    CryptoModel.create({
        title: req.body.title,
        quantity: req.body.quantity,
        poster: req.body.poster
    })

    //stop duplicaiton
    res.send('Item Added');

})

//joins paths when file sends// sends front end
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../build/index.html'));

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})