const { default: TestRunner } = require('jest-runner')
const Bag = require('./Airport')


describe('Their is a problem with Bag it ', function () {//why is describe used now??
    // joins together tests so we can better understand where the error is 
    test.only('has a weight', function () {
        const bag = new Bag(13);
        expect(bag.weight).toBe(13);
    });

    test.only('is over limit', function () {
        const bag = new Bag(40);
        expect(bag.isOverLimit()).toBe("bag is too heavy");
    });    
    test('does not have a weight', function () {
        expect(() => new Bag()).toThrowError('bag must have a weight');
    });
})




