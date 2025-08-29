const express = require('express');
const app = express()
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase')
dotenv.config({ path: path.join(__dirname, 'config', 'config.env')})


const PORT = process.env.PORT || 3333;



app.get('/api', (req, res) => {
    res.json({ message: 'API is running fine 🚀' });
});

const Products = require('./routes/product');
const Orders = require('./routes/order');

connectDatabase();

//which is used to take the request data and parse them to json and store in the body.
app.use(express.json())

app.use('/api', Products);
app.use('/api', Orders);

app.listen(PORT,()=>{
    console.log(`app listening in ${process.env.PORT} port and ${process.env.ENVIRONMENT} Environment`)
})