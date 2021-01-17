'use strict';

class person {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`);
    }

}

const kbs = new person('kbs', 25);
console.log(kbs.name);
console.log(kbs.age);
kbs.speak();


// 2. Getter and setters
// 밑의 코드의 경우 age 값이 바로 thsi.age 에 저장되는것이 아니라 get 과 set 을 호출한다. thsi.age 에서 get 을 호출 = age 에서 set을 호출
// 그리고 set 에 뒤의 = value 에서 또다시 set 안에있는 this.age 를 호출하기 때문에 이를 방지하기 위해 get 과 set 의 age 앞에 _ 를 붙여서 _age
// 로 표기한다. 따라서 총 세개의 필드가 있다. (firstName, lastName, _age) 이렇게 있다.
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            //throw Error('음수를 넣으면 안되지요?.');
            alert('age can not be negative'); // 공격적 방법
        }
        this._age = value < 0 ? 0 : vlaue; // 스무스한 방법
    }
}

const user1 = new User('steve', 'job', -1);
console.log(user1.age);


// 3. Fields(public , private)

class Experiment { // 최근에 추가된 기능
    publicField = 2;
    #privateField = 0; // 클래스 내에서만 사용가능
}

//4. Static properties and methods   최근에 js 에 생김
// static 은 각 오브젝트에 할당 되는것이 아닌 클래스 내에서만 할당되는 것이기 때문에 나중에 Type script 에서 많이 쓰임
// 들어오는 데이터에 상관없이 사용할 때 사용 .. 메모리를 효율적으로 사용

class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);


//도형을 클래스로 만들어보자
class shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends shape { } // extend 만 해주면 위의 shape 에 있는 모든것들이 Rectangle 에 포함된다.
class Triangle extends shape { // 삼각형의 넓이는 사각형과 다르기 때문에 이 클래스에서 따로 만들어줄 수 있다.
    draw() { // 삼각형 클래스에서 draw 를 재정의 했기 때문에 부모의 draw 는 실행 되지 않지만 super.draw() 를 이용하면 부모 draw 도 출력한다.
        super.draw();
        console.log('삼각형');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. class checking instanceOf 트