import TryTest from '../try-to-test'
import { expect, assert } from 'chai'

var tryTest

describe('Unit Test', function() {

    beforeEach(function() {
        tryTest = new TryTest()
    })

    it('object', () => {
        expect(tryTest.returnObjectFn()).to.be.a('object')
    })

    it('integer > 0', () => {
        expect(tryTest.returnValue()).to.be.above(0)
    })

    it('object & length', () => {
        let obj = tryTest.returnObjectFn()
        assert.isObject(obj, 'tea selection is an object');
        expect(Object.keys(tryTest.returnObjectFn())).to.have.length.above(0);
    })
});
