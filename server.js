const  mongoose = require('mongoose')
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes")

const app = express();

app.use(cors());
app.use(express.json());

 const DB = 'mongodb+srv://20ce01043:Zinitbhu$123@cluster0.rqydywn.mongodb.net/netflix-api?retryWrites=true&w=majority'

mongoose.connect(DB,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> {
    console.log(`DB Connected`)
}).catch((err)=> console.log(`no connection`));


app.use("/api/user", userRoutes)


app.listen(5000,console.log("server started"))
