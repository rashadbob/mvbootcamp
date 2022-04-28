const { default: TestRunner } = require('jest-runner')
const Maths = require('./maths') //return class 'Maths' from file maths.js
const maths = new Maths //declares another instance of the class (object)
//




test('3 and 7 expects to 10', ()=>{//declartion of test with comments

    expect(maths.SumOf(3,7)).toBe(10)//pass through values 3 and 7 with return 10 to pass//maths. as we retirive function from maths class


})


test('5 and 7 expects to 12', ()=>{//declartion of test with comments

    expect(maths.SumOf(5.3,7.5)).toBe(12.8)//pass through values 3 and 7 with return 10 to pass


})
test('3 and 7 expects to 21', ()=>{//declartion of test with comments

    expect(maths.ProductOf(3,7)).toEqual(21)//pass through values 3 and 7 with return 21 to pass


})



