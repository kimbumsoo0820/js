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