const exp = require('express');
require('dotenv').config();
const prod = require('./models/course');
// // const sample = require("./routes/sample")
const app = exp();
// const bodyParser = require('body-parser')

app.use(exp.json());

const mongoose = require('mongoose');
mongoose.set('strictQuery',false);  


const mailer = require('nodemailer');

let mail = mailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.email,
        pass:process.env.password

    }
})



mongoose.connect(process.env.uri)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started...");
    })
    console.log("connection... successful");
}).catch((err)=>console.log(err));

//....................................................................................

app.get("/", async(req,res)=>{
   
    res.send("home");

})
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

app.get('/sign-in',async(req,res)=>{
    try {
    
        const products = await prod.find({});
        res.json(products);

   
      }catch (err) {
        res.status(500).send(err.message);
      }
})

app.get('/sign-in/:id',async(req,res)=>{
    try {
        
        const {id} = req.params;
        const products1 = await prod.findById(id);
        res.json(products1);

   
      }catch (err) {
        res.status(404).send(err.message);
      }
})

app.post('/sign-in', async(req,res)=>{
    try {
       await prod.create(req.body);
        res.send("data added successfully....");

    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}) 

app.put('/sign-in/:id',async(req,res)=>{
    try {
        
        const {id} = req.params;
        const products1 = await prod.findByIdAndUpdate(id,req.body);
        if (products1){
            res.send("product updated successfully...");
        }

      }catch (err) {
        res.status(500).send(err.message);
      }
})


app.delete('/sign-in/:id',async(req,res)=>{
    try {
        
        const {id} = req.params;
        const products1 = await prod.findByIdAndDelete(id);
        if (products1){
            res.send("product deleted successfully...");
        }

      }catch (err) {
        res.status(500).send(err.message);
      }
})






// app.use("/",sample);