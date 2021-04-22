const app = require("express")();
const port=3000;

app.get("/",(req,res)=>{
    let data = `nooo is ${Math.random()} -- ${req.query.inp}`;
    console.log(" ",data)
    res.send({data : data})
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})