const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
//const fs = require('fs');


let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/contact-form', (req, res)=>{

})

app.use(express.static(path.join(__dirname,'../public')));


app.listen(3000);



/* app.use((req, res, next) => {
    fs.appendFileSync('log.txt', `${req.url}\n`);
    next();
})
 */



/* app.get('/', (req, res) =>{
    res.send('hello world.')
});
 */



/* app.get('/order/:id', (req,res) =>{
    let id = req.params.id;
    let email = req.query.email;
    res.send(`Your name ${id} and your email is ${email}.`)
}); */


/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.get('/css/style.css', (req, res)=>{
    res.sendFile(path.join(__dirname,'../public/css/style.css'))
})
 */