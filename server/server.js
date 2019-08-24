const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('dist'));

app.get('/api', (req, res) => {
    axios({
        method : 'get',
        url : 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    })
        .then((result) => {
            res.send(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});
 
module.exports = app;
