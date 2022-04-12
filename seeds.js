
const Product = require('./models/produto');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/feiraApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })


    let listaProdutos = [
        { name : 'Maçã Fuji' , price : 3 , category : 'fruta' , image : 'https://www.bistek.com.br/media/catalog/product/cache/15b2f1f06e1cd470c80b1f3fd7ec8301/3/0/3031799.jpg'},
        { name : 'Queijo Mussarela' , price : 10 , category : 'laticínio' , image : 'https://superprix.vteximg.com.br/arquivos/ids/185312-600-600/50440.jpg?v=637224995600870000'},
        { name : 'Melancia' , price : 10 , category : 'fruta' , image : 'https://img-21.ccm2.net/042iHAewS5QhDxJuNauCwI_x864=/728x/aad4dd876b7546b8b4415552846789f4/ccm-faq/uti_123rf_31404789_Katerina_Kovaleva.jpg'}
    ];

