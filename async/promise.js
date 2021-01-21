'use strict'


// Promise is a JavaScript object for asynchronous operation
// state : pending -> fulfilled or rejected
// Producer vs Consumer


// 1. Producer
// when new Promise is created , the excutor runs automatically 
// 바로 실행됨
// resolve 는 promise 가 성공했을 때 반환하는것 reject 는 실패했을 때 반환하는것.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const promise = new Promise((resolve, reject) => { // promise 는 만들어지자마자 바로 실행됨
    // doing some heavy work
    console.log('doing something...');
    setTimeout(() => {
        //resolve('kbs');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers : then, catch, finally
promise.then((value) => {
    console.log(value);
})
    .catch(error => {
        console.log(error);
    })
    .finally(() => { console.log('finally') }); // finally는 최근 추가됨, 무조건 수행된다. 성공하든 실패하든 !


// 3. Promise Chanining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));






// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(` error ! ${hen} => 알`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .catch(error => { // 위에서 에러가 났을때 잘 처리하고 싶으면 그 바로 밑에 에러 잡아서 대체 해주면 됨.!!!!!!!!!
        return '계란 은 못받았지만 대체로 빵!'
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);