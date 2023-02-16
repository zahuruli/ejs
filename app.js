const express=require("express")
const bodyParser=require("body-parser")

const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine","ejs")


const pLanguage=[]

app.get('/',(req,res)=>{
    res.render("index",{planguage:pLanguage})
})
app.get('/contact',(req,res)=>{
    res.render("contact",{})
})


app.post('/',(req,res)=>{
    const plang=req.body.planguage;
    pLanguage.push(plang)
res.redirect('/')
})



module.exports=app;