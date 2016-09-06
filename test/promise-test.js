import TryTest from '../try-to-test'
import chai from 'chai'

describe('promise', function() {
    describe('testReturnObject', function() {
        let tryTest;

        beforeEach(() => {
            tryTest = new TryTest();
        });

        it('return object', () => {
            chai.expect(tryTest.testReturnObject()).to.be.a('object');
        });

    });
});
