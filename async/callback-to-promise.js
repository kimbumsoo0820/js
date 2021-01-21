'use strict'



// 콜백 지옥

class UserStorage {
    loginUser(id, password) {
        return new Promise(resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'kbs' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        };

    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'kbs') {
                    resolve({ name: 'kbs', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }


}




// 문제 
const userStorage = new UserStorage();
const id = prompt('enter ur id');
const password = prompt('enter ur password');

userStorage.loginUser(id, password)
    .then(user => userStorage.getRoles)
    .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

