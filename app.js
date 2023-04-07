const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

const staticPath = path.join(__dirname,'views');
app.use(express.static(staticPath));

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(port,()=>{
    console.log(`Server is listening at port http://localhost:${port}`);
})