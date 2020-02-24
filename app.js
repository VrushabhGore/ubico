const express = require('express')

const app = express();
const cors = require('cors')

const bodyparser = require('body-parser')


// Middleware
app.use(bodyparser.json())
app.use(cors())
//
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post('/',(req,res) => {
    console.log(req.body)
    if(req.body.text){
    res.json({msg:req.body.text,count:req.body.text.length})
    }else{
        res.status(400).json({error:"No text found"})
    }
})


app.listen(5555,()=>{
    console.log('Server has started')
})