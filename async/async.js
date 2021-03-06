// async  와 await 은 promise 를 깔끔하게 사용하도록 할 수 있다.

// 1. async
async function fetchUser() { // async 쓰면 함수 안의 내용들을 자동적으로 Promise 로 바꿔줌.
    //do network request in 10 secs....
    return ('kbs');
}

// 만약 함수가 10초 걸리는 함수라면 사용자는 10초동안 백지 화면을 보게 되기 때문에 비동기 코드가 필요 -> Promise
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

// 위의 getBanana 함수를 원래대로 풀어쓰면 아래 코드
/*
function getBanana() {
    return delay(3000)
        .then(() => '바나나');
}
*/

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana(); // promise 는 만들면서 바로 실행되기 때문에 
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. userful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);


function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);