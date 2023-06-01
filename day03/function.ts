// typescript 설치 명령어

// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init
// 오류 발생시 Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init


// let result: number = 10;

// JS는 오버로딩을 지원하지 않는다.
// let result = add(1, 2, 3);
// let result = add(1, 2);
// console.log(result);

//     function add(...numbers){
//     let result = 0;
//     for(let i=0; i<numbers.length; i++){
//             result += numbers[i];
//         }
//         return result;
//     }
        
// 가변인자
// intro("김치윤", "남자", "20살", "광주");
        
// function intro(name: String, ...args: any) {
//     console.log(`이름: ${name}`);
//     for(let i=0; i<args.length; i++){
    //         console.log(args[i]);
    //     }
    // }
// let result = add(1, 2, 3);
// let result = add(1, 2);
// console.log(result);

// function add(number1, number2){
//     return number1 + number2;
// }

// function add(number1, number2, number3=0){
//     return number1 + number2 + number3;
// }
