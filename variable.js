
'user strict'; // 바닐라 자바 스크립트 사용할 때 user strict 써주기 (오류 검출됨)

//variable , rw(read/write)

{
    let name = 'kbs';
    console.log(name);
    name = 'hello';
    console.log(name);
}
//constant
const char = 'c';
const brendean = 'brendan';
const greeting = 'hello' + brendean;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true


const kbs = { name: 'kimbumsoo', age: 25 }; //object
kbs.age = 23;

//Immutable data - 변경 불가 : premitive types, frozen object(i.e. object. freeze())
//Mutable data tupes - 변경 가능 - 자바스크립트에서 디폴트
