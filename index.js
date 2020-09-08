let express = require('express')
let bodyParser = require('body-parser')
let routes = require('./routes')
let app = express()


const environment = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000

//Bootstrapping 
app.use(bodyParser.json()); 
app.use(routes)

//end 


//Handling errors
app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    environment === "development"?
    res.json({
        error:error.message
    }):
    res.json({
        error:error.code
    })
})
app.listen(PORT, () => console.log("running on "+PORT))