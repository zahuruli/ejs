const app=require('./app')

const port=process.env.PORT;
const hostName='127.0.0.1'

app.listen(port,()=>{
    console.log(`server is running at http://${hostName}:${port}`);
})