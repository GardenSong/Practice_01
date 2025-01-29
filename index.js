// TIL
// Tdd
// 객체지향프로그래밍 실습
//동적은 python과 javascript 가 있다.


//java에서 생성자가 있는 이유는 객체가 생성될 때 실제로 객체를 만들려면 이름과 나이를 지정해야 하는데 속성만 있다면 객체를 만들 떄 그 값들을 어떻게 채울지 알려주는 부분이 없으닊, 값을 설정하는 방법이 필요해
// 전역 스코프  (글로벌)
// let global = "나는 전역 변수야"
// function printGlobal(){
// console.log(globalVar);
// } //전역변수를 많이 사용하면 메모리에 안좋음
// 2. Local Scope (지역스코프)
//      2-1.Function Scope (함수 스코프)
//  function myFunction(){
    // let localVar = "나는 함수 내부 변수야!";
    // console.log(localVar);
    //}
// 블록 스코프
// {let block = "나는 블록 내부 변수야!"}

//여기서 중요한 점은 var, let, const의 Scope 차이점
// var은 전역, 함수 가능하지만 블록은 무시함 (블록 안에서 선언되도 무시)
// let과 const는 모두 전역, 함수, 블록 모두 따른다.

// 전역 변수는 어디서나 접속이 가능하기 때문에 보안에 위험
//  전역 변수는 프로그램이 종료될때까지 메모리에 남아있다.
// String 문자열
// "", '',`` 이렇게 세가지 방법으로 표현 가능하다.
// let str1 = "Hello";   // 큰따옴표
// let str2 = 'World';   // 작은따옴표
// let str3 = `Hi ${str1}`; // 백틱 (템플릿 리터럴)
// console.log(str3);  // "Hi Hello"
// Number
// let intNum = 42;       // 정수
/* let floatNum = 3.14;   // 실수
let notNum = NaN;      // 숫자가 아님
let infinityNum = Infinity; // 무한대

console.log(typeof intNum);   // "number"
console.log(typeof floatNum); // "number"
console.log(typeof notNum);   // "number"
console.log(typeof infinityNum); // "number"*/
// BigInt 큰정수
// 숫자 뒤에 n을 붙이면 BingInt 타입이 된다.
// 일반 Number 타입과 연산할 수 없다.
// let bigNum = 9007199254740991n; // BigInt
console.log(typeof bigNum);  // "bigint"
// Boolean 논리값
// true 또는 false 값만 가진다.
// Undefined 정의되지 않음
// 변수를 선언했지만 값을 할당하지 않으면생김
// Null
// 값이 없다는 것을 명시적으로 나타낸다
// 
// 이스케이프 (Escape)
// 특수한 문자나 기호를 문자열 안에ㅓㅅ 제대로 표현하기 위해서 이다.
// javascript 에서는 백슬래시(\)를 이용해서 특수 문자를 이스케이프 할 수 이써
// 우리가 쓰는 "" , '', \\(슬래시 한개), \n(줄바꿈) , \t(탭), \u 유니코드, \x 16진수 코드 등이 있어
//  더 쉬운 방법은 이스케이프 문자를 사용하지 않고 ` 이렇게 생긴 백틱을 사용하면 더 쉬워
// let message = `그는 "안녕하세요" 라고 말했다.`;
// let path = `C:\Users\Yumi`;
// console.log(message);  // 그는 "안녕하세요" 라고 말했다.
// console.log(path);  // C:\Users\Yumi
// 이거를 템플릿 리터럴 이라고 해.

// 케밥케이스과 케말케이스 (프로그래밍 이름 짓기 규칙)
// 케밥-케이스 라고 해서 단어와 단어 사이를 하이픈(-)으로 연결하는 표기법이야.
// HTML, CSS 파일명, URL 경로 등에서 자주 사용돼
// 이 하이픈이 꼬치 처럼 생겨서 케밥이라고 해
// 카멜케이스는  javascript에서 쓰이고 낙타의 등처럼 첫단어는 소문자로 시작 두번째는 대문자로 시작하는 이름짓기야
// userName 처럼 말이지
// 대문자 카멜은 어떨까? 이거는 클래스, 생성자 함수, 객체 타입 정의에서 사용돼
// class UserProfile{}
// function CreateUser 이라고 해 생성자 함수
// 스네이크 케이스 도 있어 (파이썬 변수명 데이터베이스 테이블명에서)
// user_score = 100 같이 변수 python에서 쓰여


// 객체 지향 프로그래밍 (OOP)는 뭘까?
// 객체 지향 프로그램에는 꼭
// 생성자 (Constructor), 오버로딩(Overloading), 오버라이딩(Overriding), 제네릭(Generic), 상속(Inheritance), super 키워드, 다형성(Polymorphism)을 객제 지향이 뭔지 이야기 해볼께
// 생성자 (Constructor)
// java에서는 생성자가 꼭 필요하다. 생성자는 클래스의 이름과 같아야하며, 변환 타입이 없음. 객체를 생성할 대 자동으로 호출
// java에서는 생성자가 없으면 기본 생성자가 자동으로 추가된다.
// 객체를 생성할 때 반드시 new 키워드를 사용해야한다.
// JavaScript에서 생성자.
// 생성자 없어도 객체 생성이 가능하다. 

// 오버로딩
// java에서는 같은 이름의 메서드를 여러 개 정의할 수 있다.
// 매개변수의 개수나 타입이 다르면 다른 메서드로 취급된다.
/*
class MathOperations {
    // 정수 덧셈
    int add(int a, int b) {
        return a + b;
    }

    // 실수 덧셈 (오버로딩)
    double add(double a, double b) {
        return a + b;
    }

    // 세 개의 숫자 덧셈 (오버로딩)
    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        MathOperations math = new MathOperations();
        System.out.println(math.add(2, 3));    // 5
        System.out.println(math.add(2.5, 3.5)); // 6.0
        System.out.println(math.add(1, 2, 3)); // 6
    }
}
*/
// JavaScript에서의 오버로딩
// javascript 에서는 같은 이름의 메서드를 여러개 정의 할 수 없음
// javascript는 오버로딩을 할 수 없다.
// extends (상속을 받을때 꼭 써야하는 단어)
// 예) 위에서 class Animal 라고 되어 있다면
// 밑에서 class Dog extends Animal이라고 써야 한다.
/*
class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("멍멍!");
    }
}
*/ 
// 제네릭
// 데이터 타입을 미리 지정하지 않고, 실행 시 결정할 수 있도록 하는 기능
// java에서는 강력하게 지원되지만, javascript에서는 동적 타입언어라 필요없음
// java에서 제네릭
// JAva 는 정적 타입 언어이므로 제너릭을 사용하여 타입을 유연하게 설정할 수 있음.
// <> 문법을 사용하여 제네릭을 적용함
/*
class Box<T> { 
    private T item;

    public void setItem(T item) { 
        this.item = item; 
    }

    public T getItem() { 
        return item; 
    }
}
*/
// 여기서 T는 타입 매개 변수 이다. 다양한 타입으로 대체할 수 있다.
// private T item은 T타입의 item이라는 변수를 선언한다. 이 변수는 Box 객체에 들어가는 아이템을 저장하는 용도이다.

// Inheritance 상속 과 super 키워드
// java 예제.
/*
    // JavaScript
class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    void makeSound() {
        System.out.println("동물이 소리를 냅니다.");
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name); // 부모 클래스의 생성자 호출
    }

    @Override
    void makeSound() {
        System.out.println(name + "가 멍멍 짖습니다.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("바둑이");
        dog.makeSound(); // 바둑이가 멍멍 짖습니다.
    }
}
*/ 

/*
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("동물이 소리를 냅니다.");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // 부모 클래스의 생성자 호출
    }

    makeSound() {
        console.log(`${this.name}가 멍멍 짖습니다.`);
    }
}

const dog = new Dog("바둑이");

dog.makeSound(); // 바둑이가 멍멍 짖습니다.
*/





//
//
// 다형성(Polymorphism) 완전 정복: Java&javaScript 코드 설명
/*
    // 🟢 부모 클래스 (Animal) 생성
class Animal {
    // 부모 클래스의 기본 메서드 (모든 동물이 소리를 내야 함)
    void makeSound() {
        System.out.println("동물이 소리를 냅니다.");
    }
}

// 🟢 자식 클래스 (Dog) 생성
class Dog extends Animal {
    // 부모의 makeSound() 메서드를 "오버라이딩(Overriding)"함
    @Override
    void makeSound() {
        System.out.println("멍멍!");
    }
}

// 🟢 자식 클래스 (Cat) 생성
class Cat extends Animal {
    // 부모의 makeSound() 메서드를 "오버라이딩(Overriding)"함
    @Override
    void makeSound() {
        System.out.println("야옹!");
    }
}

public class Main {
    public static void main(String[] args) {
        // 🔵 다형성 적용: 부모 타입(Animal)으로 자식 객체(Dog, Cat)를 선언
        Animal myDog = new Dog();  // 부모 타입 변수에 Dog 객체 저장
        Animal myCat = new Cat();  // 부모 타입 변수에 Cat 객체 저장

        // 🔵 같은 메서드(makeSound()) 호출, 하지만 실행되는 것은 실제 객체의 메서드!
        myDog.makeSound();  // 🟠 출력: 멍멍!  (Dog의 메서드 실행)
        myCat.makeSound();  // 🟠 출력: 야옹!  (Cat의 메서드 실행)
    }
}

 */ 

// JavaScript 예제
/*
// 🟢 부모 클래스 (Animal) 생성
class Animal {
    // 부모 클래스의 기본 메서드 (모든 동물이 소리를 내야 함)
    makeSound() {
        console.log("동물이 소리를 냅니다.");
    }
}

// 🟢 자식 클래스 (Dog) 생성
class Dog extends Animal {
    // 부모의 makeSound() 메서드를 "오버라이딩(Overriding)"함
    makeSound() {
        console.log("멍멍!");
    }
}

// 🟢 자식 클래스 (Cat) 생성
class Cat extends Animal {
    // 부모의 makeSound() 메서드를 "오버라이딩(Overriding)"함
    makeSound() {
        console.log("야옹!");
    }
}

// 🔵 다형성을 활용한 함수 (동물 객체를 받아서 소리를 내게 함)
function letAnimalSpeak(animal) {
    animal.makeSound();
}

// 🟢 객체 생성 (Dog, Cat)
const myDog = new Dog();
const myCat = new Cat();

// 🔵 같은 함수(letAnimalSpeak)를 호출하지만, 실행되는 메서드는 다름!
letAnimalSpeak(myDog);  // 🟠 출력: 멍멍!  (Dog의 메서드 실행)
letAnimalSpeak(myCat);  // 🟠 출력: 야옹!  (Cat의 메서드 실행)
*/

//
//
//
//
/*
class Programmer {
  // 생성자(Constructor): 객체를 만들 때 호출되는 함수
  constructor(language, device, disease, nation, age, junior, coffee, stress, eye) {
    this.language = language; // 개발자가 사용하는 프로그래밍 언어
    this.device = device; // 개발자가 사용하는 컴퓨터 기기
    this.disease = disease; // 개발자의 건강 상태 (true: 지병 있음, false: 건강함)
    this.nation = nation; // 개발자의 국적
    this.age = age; // 개발자의 나이
    this.junior = junior; // 주니어 개발자인지 여부 (true: 주니어, false: 경력 개발자)
    this.coffee = coffee; // 커피를 좋아하는지 여부 (true: 좋아함, false: 안 마심)
    this.stress = stress; // 스트레스 지수 (0~10, 숫자가 클수록 스트레스가 많음)
    this.eye = eye; // 눈 색깔
  }

  // 개발자의 자기소개 메서드
  introduce() {
    console.log(
      `안녕하세요, 저는 ${this.age}살 ${this.nation} 출신 개발자입니다. 주로 ${this.language} 언어를 사용하며, ${this.device}로 개발합니다. 
      ${this.coffee ? "커피를 좋아합니다." : "커피를 즐기지 않습니다."} 
      ${this.junior ? "주니어 개발자입니다." : "경력 개발자입니다."} 
      눈은 ${this.eye}이고, 스트레스 지수는 ${this.stress}입니다. 
      ${this.disease ? "지병이 있습니다." : "건강합니다."}`
    );
  }
}
 */

/*
const programmers = [
  new Programmer("JavaScript", "MacBook Pro", false, "한국", 28, true, true, 8, "갈색"),
  new Programmer("Python", "Dell XPS", false, "미국", 25, true, true, 5, "파란색"),
  new Programmer("Java", "ThinkPad", true, "한국", 30, false, true, 9, "검은색"),
  new Programmer("C++", "MacBook Air", false, "일본", 27, false, false, 6, "갈색"),
  new Programmer("JavaScript", "LG Gram", true, "한국", 23, true, true, 7, "초록색"),
];

// 모든 개발자가 자기소개를 하도록 반복문 실행
for (const programmer of programmers) {
  programmer.introduce();
}
*/

/*
// JavaScript 개발자를 위한 새로운 클래스 정의 (Programmer 클래스를 상속)
class JavaScriptProgrammer extends Programmer {
  // 생성자(Constructor): 기존 Programmer 속성에 framework 추가
  constructor(language, device, disease, nation, age, junior, coffee, stress, eye, framework) {
    // 부모 클래스(Programmer)의 생성자를 호출하여 기존 속성 초기화 (super 사용)
    super(language, device, disease, nation, age, junior, coffee, stress, eye);
    this.framework = framework; // 추가된 속성: 사용하는 프레임워크 (React, Angular, Vue 등)
  }

  // introduce() 메서드를 오버라이딩 (재정의)하여 JavaScript 개발자의 특징 추가
  introduce() {
    console.log(
      `안녕하세요, 저는 ${this.age}살 ${this.nation} 출신 개발자입니다. 주로 ${this.language} 언어를 사용하며, ${this.device}로 개발합니다. 
      ${this.framework} 프레임워크를 사용합니다. 
      ${this.coffee ? "커피를 좋아합니다." : "커피를 즐기지 않습니다."} 
      ${this.junior ? "주니어 개발자입니다." : "경력 개발자입니다."} 
      눈은 ${this.eye}이고, 스트레스 지수는 ${this.stress}입니다. 
      ${this.disease ? "지병이 있습니다." : "건강합니다."}`
    );
  }
}
*/
//let은 재할당 가능
//const는  재할당 불가능
//https://school.programmers.co.kr/learn/courses/30/lessons/42888
// 나는 이 문제를 풀고싶은데, 처음 접근해서 어려워. 단계별로 너가 힌트를 하나씩 제공해줘.
// java 스크립트는 이렇게 
/*
const programmers = [
  new Programmer("JavaScript", "MacBook Pro", false, "한국", 28, true, true, 8, "갈색"),
  new Programmer("Python", "Dell XPS", false, "미국", 25, true, true, 5, "파란색"),
  new Programmer("Java", "ThinkPad", true, "한국", 30, false, true, 9, "검은색"),
  new Programmer("C++", "MacBook Air", false, "일본", 27, false, false, 6, "갈색"),
  new Programmer("JavaScript", "LG Gram", true, "한국", 23, true, true, 7, "초록색"),
];

// 모든 개발자가 자기소개를 하도록 반복문 실행
for (const programmer of programmers) {
  programmer.introduce();
}
*/
//이렇게 정리한다.