const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine','ejs');

mongoose.connect('mongodb+srv://Esperimento:1234@cluster0.3qzbmrw.mongodb.net/?retryWrites=true&w=majority');

// //Database connection
// const connP = mongoose.connect('mongodb+srv://Esperimento:1234@cluster0.3qzbmrw.mongodb.net/?retryWrites=true&w=majority',{
//     useNewUrlParser: true,               
//     useUnifiedTopology: true
//     }).then(m => m.connection.getClient());

const libriSchema = {
    titolo: String,
}

const Libro = mongoose.model('Pippi',libriSchema);

app.get('/index', (req, res) => {
    Pippi.find({}, function(err, libro){
        res.render('index', {
            lista: libro
        })
    })
})

app.listen(4000, function() {
    console.log('server started');
})