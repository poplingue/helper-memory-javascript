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
        if (document.body.classList.contains('btn-toggle')) {
            document.body.classList.remove('btn-toggle');
        } else {
            document.body.className += 'btn-toggle';
        }
    }
}
export default Trytest
