let axios = require('axios')
const { UrlProd } = require('../utils/constants')
const { response } = require('express')
const fakeDb = require('../fakedb.json')
async function GetData(params){
    // axios(`${UrlProd}/`).then(reponse =>{
    //     return resolve(response.data)
    // })
    
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve( fakeDb)
        },2000)
    })
}

module.exports = {
    GetData
}