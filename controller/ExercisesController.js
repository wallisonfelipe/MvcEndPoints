const NetworkService = require("../services/NetworkService")

async function GetAll(req, res){
    let response = await NetworkService.GetData()
    return res.json(response)
    
}
module.exports = {
    GetAll
}