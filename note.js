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

    for (const arg of args) { // 파이썬의 in 같은 개념인듯. of 를 이용하면 하나씩 대입됨
        console.log(arg);
    }

}
printAll('dream', 'coding', 'kbs');



function upgradeUser(user) { // 예를들어 사용자의 포인트가 일정값 이상일때 무언가를 실행하도록 하지 말고 얼마 이히알때 바로 리턴해 버리도록 하여
    // 효율을 높여야 잔소리 안듣는다.  이것은 틀린 예
    if (user.poit > 10) {
        // something 
    }
}

function upgradeUser(user) { // 이것이 정답 예시   값이 아닌경우 먼저 나와주는게 좋다
    if (user.point <= 10) {
        return;
    }
    // 여기에 무언가를 입력!!!
}


const print = function () { // 이런식으로 변수에 함수를 담을수 도 있다.
    console.log('helllllo');
}

print();


function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love u') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes');
};

//named function
const printNo = function print() { // 함수 안에서 함수를 호출할 수 도 있음
    console.log('no');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love u', printYes, printNo);


// Arrow function
//always anonymous
const simplePrint = function () {
    console.log('simple');
};

// 위의 functinn 을 간편하게 변경  애로우 펑션
const simplePrint = () => console.log('simple');

const add = (a, b) => a + b;

const simpleMultiply = (a, b) => { // 함수 안이 여러줄 인 경우
    //do something
    return a * b;
};

// 함수를 선언하면서 동시에 함수를 실행시키는 IIFE 
(function hello() {
    console.log('IIFE');
})();

//quiz
function calculate(command, a, b) {
    if (command === 'add') {
        result = a + b;
    }
}