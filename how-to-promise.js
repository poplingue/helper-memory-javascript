class PromiseMe {
    constructor() {

        this.fromServer().then((datas) => {
            console.log('test', datas);
            return this.getFirstName(datas);
        }).then(function(user) {
            console.log('then - The firstname is', user.firstName)
        }).catch(function(error) {
            console.log('catch error', error);
        })
    }
    fromServer(data) {
        //pending state
        return new Promise(function(resolve, reject) {
            let statusCode = 200;
            let datas = [{ 'id': 0, 'firstName': 'toto' }, { 'id': 1, 'firstName': 'titi' }]

            if (statusCode === 200) {
                // fullfilled state
                resolve(datas)
            }

            if (statusCode === 404) {
                // rejected state
                reject(new Error(statusCode))
            }
        });
    }
    getFirstName(array) {
        return array.find(x => x.id === 0)
    }
}

export default PromiseMe;
