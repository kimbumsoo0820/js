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
const person4 = Person('kim', 30);
console.log(person4);

function Person(name, age) {
    return {
        name: name,
        age: age,
    };
}

// 4. Constructor function ( 오브젝트를 만들기 위한 함수를 작성할때 이렇게 작성함)

function Person(name, age) {
    //
    this.name = name;
    this.age = age;

}

// 5. in operator  해당 키가 오브젝트 안에 이것이 있는지 확인
console.log('name' in kbs);

// 6. for .. in vs for .. of
//for (key in obj)

for (key in kbs) { // in 
    console.log(key)
}


//////

const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// 위의것을 쉽게하면
for (value of array) {
    console.log(value);
}


// 7 cloning   user 에서 레퍼런스가 만들어지고 이것이 오브젝트를 가리킴. user2 도 마찬가지로 레퍼런스가 똑같이 생기고 오브젝트를 가리키기 때문에
// user2 에서 오브젝트의 값을 변경하면 오브젝트는 변경됨.

const user = { name: 'kbs', age: '25' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// 오브젝트 자체를 복사하는 방법
// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

// 2번째 방법
const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user);     이것은 위의 두줄을 짧게 줄인코드
console.log(user4);

// 2번째 방법의 예제
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
