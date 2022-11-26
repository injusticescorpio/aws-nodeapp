require("dotenv").config();
const app=require("./index")
const port=process.env.PORT || 3000
app.listen(port, function(){
    console.log(`listening on port ${process.env.NODE_PORT}`)
})