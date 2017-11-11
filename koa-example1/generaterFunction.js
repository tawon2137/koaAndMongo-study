/**
 * generater Function 가이드 주소 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function*
 */

// function keyword끝에 * 이 붙으면 generater function을 반환 하는 함수이다. ES6부터 정의된 사양 위링크를 참조할것
// 제너레이터를 반환하며 반환값.next() 로 호출시 yield 키워드를 만날떄까지 함수가 수행되며 그다음 next를 호출하게될시에는 그다음 yield키워드를 만날때까지 수행되면서
// yield expression의 수행식을 next().value로 반환하게되며 function 수행이 완전하게 끝난경우에는 next().done 의 값이 true를 가지고잇습니다.
// 간단한 예제 MDN 참조
function* generatorFn() {
    var index = 0;
    while (index < 3) {
        yield index++;
    }
}


let gen = generatorFn();
console.log(gen);
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
console.log(gen.next());