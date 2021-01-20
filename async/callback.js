'use strict'

// JavaScript is synchronous.

// hoisting : var , fuction declaration  이런 함수 선언들이 자동적으로 제일 위로 올라가는 것!!! 면접에도 많이 나옴. 호이스팅

// 비동기적 실행방법
console.log('1');                           //동기
setTimeout(() => console.log('2'), 1000);  // 비동기
console.log('3');                          //동기


// 즉각 실행되는 콜백
function printImmediately(print) { // 함수는 호이스팅 되면 맨 위로 간다.
    print();
}
printImmediately(() => console.log('hello'));

// 나중에 실행되는 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// 콜백 지옥

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'kbs' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'kbs') {
                onSuccess({ name: 'kbs', role: 'admin' });
            } else {
                onErrow(new Error('no access'));
            }
        }, 1000);

    }
}



// 문제 
const userStorage = new UserStorage();
const id = prompt('enter ur id');
const password = prompt('enter ur password');
userStorage.loginUser(id, password,
    (user) => {
        userStorage.getRoles(user, (userWithRole) => {
            alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },
            (error) => {
                console.log(error);
            }
        );
    },
    (error) => { console.log(error) }
);