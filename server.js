const express = require('express');
const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI');
const path = require('path');

const app = express();

//bodyParser middleware
app.use(express.json());

//Mongoose Connection
mongoose
    .connect(db,{ useNewUrlParser: true ,useCreateIndex:true, useUnifiedTopology: true})
    .then( console.log('Connected to Mongoose') )
    .catch(err => console.log(err))


//routes

app.use('/api/fetchCategories',require('./routes/fetchCategories'));
app.use('/api/findSubcategories',require('./routes/findSubcategory'));
app.use('/api/findProducts',require('./routes/findProducts'));
app.use('/api/findProduct',require('./routes/findProduct'));
app.use('/api/register',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/addtocart',require('./routes/addtocart'));
app.use('/checkcart',require('./routes/checkcart'));
app.use('/relatedProducts',require('./routes/relatedProducts'));
app.use('/fetchCart',require('./routes/fetchCart'));
app.use('/removecart',require('./routes/removecart'));

//Serve static asserts if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const port = process.env.PORT || 5000 ;
app.listen(port, ()=>{ console.log(`server running on port ${port}`)} );