const express=require('express')
const app=express()

app.use('/',(req,res)=>{
 res.send("hey")
})


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});