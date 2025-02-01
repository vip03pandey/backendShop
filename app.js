const express=require('express')
const app=express()
const path=require('path')
const cookieParser=require('cookie-parser')
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))   
const db=require('./config/mongoose-connection')



const ownerRoutes=require('./routes/ownerRoutes')
const usersRoutes=require('./routes/usersRoutes')   
const productsRoutes=require('./routes/productsRoutes')
const indexRoutes=require('./routes/index')

app.use("/owners",ownerRoutes);
app.use("/users",usersRoutes);
app.use("/products",productsRoutes);
app.use("/",indexRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});