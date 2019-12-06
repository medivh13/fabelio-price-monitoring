const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products.routes');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useCreateIndex:true } );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/products/api', productRoutes);

if (['production'].includes(process.env.NODE_ENV)) {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});