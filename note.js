console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);


const val1 = true;
const val2 = 4 < 2;

console.log(`or: ${val1} || ${val2} || check()`);  // check() 와 같이 무거운 인자는 뒤로 넘겨야 효율적이다.!!!!!!!!!



function check() {
    for (let i = 0; i < 10; i++) {
        console.log('OMG');
    }
    return true;
}

// == 와 === 의 차이점 : == 은 숫자5 나 문자열 5 둘다 같다고 인식, ===는 다르다고 인식

// console.log(name === 'kbs' ? 'yes' : 'no'); // 삼항연산자 ~!!!!!!
const age = 25;
const today = 'sunny';
const name = '김범수';
const a = 'today is';


console.log(`${a}` + name === '김범수' ? age === 23 ? 'Cloudy' : today === 'saturday' ? 'saturday' : 'Monday' : 'Sunny');




const browser = 'IE';

switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('Love U');
        break;
    default:
        console.log('same all');
        break;
}


let i = 3;
while (i > 0) {
    console.log(`${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

function printHello() {
    console.log('Hello');
}


function showMessage(message, from = 'unknown') { // 바로 디폴트 값을 설정해줄 수 있다.
    console.log(`${message} by ${from}`);
}
showMessage('hi!');



function printAll(...args) { // 배열로 값을 받는다 !!!!!!!!! 
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

printAll('dream', 'coding', 'kbs');