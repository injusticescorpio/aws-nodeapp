require("dotenv").config();
const app=require("./index")
const port=process.env.PORT || 4000
console.log(`post is ${port}`)
app.listen(port, function(){
    console.log(`listening on port ${port}`)
})