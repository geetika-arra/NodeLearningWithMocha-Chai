const {expect} = require("chai");
const request =require("request");

let baseUrl='';

before(()=>{
    baseUrl='http://localhost:8081';
})
after(()=>{
    console.log("After Each Ends");
})

it('Should Return status 200',()=>{
    request(baseUrl+'/status',(err,response,body)=>{
        expect(response.statusCode).to.equal(200);
    })


})
it('Should Return status code in case of Addition of 2 Numbers',()=>{
    request(baseUrl+'/add/2/3',(err,response,body)=>{
        expect(response.statusCode).to.equal(200);
    })
})
it('Should Return result in case of Addition of 2 Numbers',()=>{
    request(baseUrl+'/add/2/3',(err,response,body)=>{
        expect(body).to.equal(JSON.stringify({sum:5}));
    })
})