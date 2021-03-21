const {expect} =require('chai');
const calc=require('../app/calc');
describe('Calculator Service Testing',(req,res)=>{
    describe('Calc Addition',()=>{
        it('Hello assertion',()=>{
            expect('Hello').to.equal("Hello");
        })

        it('Add assertion',()=>{
            expect(calc.add(2,3)).to.equal(5);
        })
    })
  
})