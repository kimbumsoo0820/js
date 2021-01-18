'user strict'

//배열 선언 방법
const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3 Looping over an array

// a. for of
for (let i of fruits) {
    console.log(i);
}
// b. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// c. forEach

fruits.forEach(function (fruits, index) {
    console.log(fruits, index);
});

// 위의 코드를 쉽게 바꾸면
fruits.forEach((fruits) => console.log(fruits))


// 4. Addition deletioin copy   (push 와 pop 을 추천. unshift 와 shift 는 오래걸린다. 앞에서부터 처리하기위해 뒤를 바꿔야하기 때문)

// push : add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift('딸기', '복숭아');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// splice : remove an item by index position

fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1); // 뒤에 숫자 안쓰면 그 인덱스부터 쭉 지워짐
console.log(fruits);
fruits.splice(1, 1, '수박', '참외'); // 지우고 그자리에 뒤에 내용을 넣는다.
console.log(fruits);

// combine two arrays  배열을 합친다
const fruits2 = ['오징어', '땅콩'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// Searching
//find the index
console.log(fruits);
console.log(fruits.indexOf('apple'));

// includes 포함하는지 확인 true/false
console.log(fruits.includes('딸기'));

//  lastIndexOf
fruits.push('apple');
console.log(fruits.indexOf('apple')); // 처음 나오는 apple 을 찾는다
console.log(fruits.lastIndexOf('apple')); //  마지막에 나오는 apple 을 찾는다.

