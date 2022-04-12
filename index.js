const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const Product = require('./models/produto.js');

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
const categories = ['frutas' , 'vegetais' , 'laticínios' , 'grãos' , 'padaria' , 'doces' , 'salgados' , 'lembranças' , 'bebidas'];


app.get('/products', async (req,res) => {
    const {category} = req.query;
    if (category){
        const products = await Product.find({category})
        res.render('products/index' , {products , category , categories});
    } else{
        const products = await Product.find();      
        res.render('products/index' , {products , category: 'All' , categories});
    }
})

async function confirmDelete () {
    if (globalThis.confirm('Quer mesmo retirar esse produto do estoque?')){
        const product = await Product.findByIdAndDelete(id);
    }
}

app.post('/products', async (req,res) => {
   const newProduct =  new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct.id}`);
})

app.get('/' , async (req,res) => {
    const {category} = req.query;
    const products = await Product.find({});
    res.render('products/index' , {products , category : 'Itens' , categories});
})

app.get('/products/:id' , async (req,res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/detail' , {product});
})
app.patch('/products/:id' , async (req,res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id , req.body , {runValidators:true, new:true });
    console.log(req.body);
    res.redirect(`/products/${product.id}`);
})
app.delete('/products/:id' , async (req,res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
})

app.get('/new' , async (req,res) => {
    const products = await Product.find({});;
    res.render('products/new' , {products , categories});
})


app.listen(3000 , () => {
    console.log('App listening successfully!');
})