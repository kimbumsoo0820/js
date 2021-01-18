const name = 'kbs';
const age = 4;
print(name, age);

// 오브젝트 만드는 두가지 방법 아래   object = {key : value}
const obj1 = {}; // object literal 
const obj2 = new Object(); // object constructor

//위의 것들을 오브젝트로 관리하게되면 
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const kbs = { name: 'kbs', age: 25 };
print(kbs);

kbs.hasJob = true;
console.log(kbs.hasJob);

delete kbs.hasJob;
console.log(kbs.hasJob);



//2. Computed properties 계산된 프로퍼티
// key should be always string
console.log(kbs.name);
console.log(kbs['name']);
kbs['hasJob'] = true;
console.log(kbs.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(kbs, 'name');
printValue(kbs, 'age');

//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
//person4 를 만들 때 또 이렇게 만들기 번거로우니 함수로 만들 생각을 함
const person4 = makePerson('kim', 30);
console.log(person4);

function makePerson(name, age) {
    return {
        name: name,
        age: age,
    };
}