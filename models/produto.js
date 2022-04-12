const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/feiraApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

    const productSchema = new mongoose.Schema({
       name : {
           type : String,
           required : true
        },
       price : {
           type : Number,
           required : true,
           min : [0 , 'price must be bigger than 0!']
        },
        category : {
            type : String,
            enum : ['frutas' , 'vegetais' , 'laticínios' , 'grãos' , 'padaria' , 'doces' , 'salgados' , 'lembranças' , 'bebidas'],
            lowercase : true
        },
        image : {
            type : String,
            required : true
        },
        quantity : {
            type : Number,
            required : true,
            min : [0 , 'price must be bigger than 0!']
         }
    });

    const Product = mongoose.model('Product' , productSchema);
    module.exports = Product;