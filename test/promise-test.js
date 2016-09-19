import HowToPromise from '../promise/how-to-promise'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

var expect = chai.expect
chai.use(chaiAsPromised);

describe('Promise Test', function() {

    it('promise resolve', () => {
        let howPromise = new HowToPromise()
        let result = howPromise.fromServer()

        expect(result).to.eventually.be.fulfilled
    })

})
