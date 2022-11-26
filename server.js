require("dotenv").config();
const app=require("./index")
app.listen(process.env.NODE_PORT, function(){
    console.log(`listening on port ${process.env.NODE_PORT}`)
})