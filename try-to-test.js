class Trytest {
    constructor() {
        document.querySelector('.btn-test').addEventListener('click', () => {
            this.onclickFn();
        })
    }
    returnObjectFn() {
        return { 'id': 0, 'a': 'toto' }
    }
    returnValue() {
        return 4
    }
    onclickFn() {
        if (document.body.classList.contains('test')) {
            document.body.classList.remove('test');
        } else {
            document.body.className += 'test';
        }
    }
}
export default Trytest
