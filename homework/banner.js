// 객체 불러오기
const banner = document.querySelector("div.banner");
const image_divs = document.querySelectorAll("div.banner div.image");
const first_div = document.querySelector("#first-temp");
const last_div = document.querySelector("#last-temp");
const prev = document.querySelector("div.prev");
const next = document.querySelector("div.next");
const dots = document.querySelectorAll("div.dot");
// 필요한 변수 선언
// count: 배너 이미지 이동
let count = 1;
// check: "앞으로 가기", "뒤로 가기" 버그 방지용
let check = true;
// temp: dot 이동 시 이전 값 저장
let temp;
let clickCheck = false;

// 배너 각 칸에 이미지 넣기
image_divs.forEach((image_div, i) => image_div.style.backgroundImage = `url(soomgo0${i + 1}.png)`);
first_div.style.backgroundImage = `url(soomgo06.png)`;
last_div.style.backgroundImage = `url(soomgo01.png)`;


let slide = setInterval(() => autoSlide(), 2000);

changeButtonStyle();
console.log(temp);

function changeButtonStyle(){
    // temp에 이전 값 있으면 초기화
    if(temp){
        temp.style.background = "none";
    }
    // temp에 현재 dot 값 담아주고
    // 현재 dot 색상 변경
    temp = dots[count - 1];
    dots[count - 1].style.background = "rgb(1, 149, 127)";
}

dots.forEach((dot, i) => {
    // dot에 마우스 커서를 댈 때
    dot.addEventListener("mouseover", () => {
        // clickCheck true 설정
        clickCheck = dot.style.background == "rgb(1, 149, 127)";
        dot.style.background = "rgb(1, 149, 127)";
    });
    
    dot.addEventListener("mouseout", () => {
        // clickCheck이 true면 즉시 해당 함수 중지
        if(clickCheck){return;}
        // 스타일 없애기
        dot.style.background = "none";
    });
    
    dot.addEventListener("click", () =>{
        // clickCheck 플래그 true 설정
        clickCheck = true;
        // interval 삭제
        clearInterval(slide);
        count = dot.classList[1];
        banner.style.transform = `translate(${-970 * count}px)`;
        banner.style.transition = "transform 0.7s";
        changeButtonStyle();
        slide = setInterval(() => autoSlide(), 2000);
    });
});

// 뒤로 가기
prev.addEventListener("click", function(){
    // 플래그가 false일 때 아래 코드 실행 차단
    if(!check){return;}
    // 광클 방지(check = true일 때 진입했으면 한 번만 실행)
    check = false;
    //  인터벌 삭제
    clearInterval(slide);
    banner.style.transform = `translate(${-970 * --count}px)`;
    banner.style.transition = "transform 0.7s";
    
    if(count == 0){
        setTimeout(() => {
            // 슬라이드 소요시간 제거
            banner.style.transition = "transform 0s";
            // 배너 위치 다시 마지막 사진으로 이동
            banner.style.transform = `translate(-5820px)`;
            // 0.7초 뒤에 실행
        }, 700);
        // 초기화
        count = 6;
    }
    // 클릭한 곳에 색을 넣어준다
    changeButtonStyle();
    // 인터벌 복구
    slide = setInterval(() => autoSlide(), 2000);
    // check값 true로 복구
    setTimeout(() => {check = true}, 700);
});

next.addEventListener("click", function(){
    // 플래그가 false일 때 아래 코드 실행 차단
    if(!check){return;}
    // 광클 방지(check = true일 때 진입했으면 한 번만 실행)
    check = false;
    //  인터벌 삭제
    clearInterval(slide);
    banner.style.transform = `translate(${-970 * ++count}px)`;
    banner.style.transition = "transform 0.7s";
    
    if(count == 7){
        setTimeout(() => {
            // 배너 위치 다시 첫 번째 사진으로 이동
            banner.style.transform = `translate(-970px)`;
            // 슬라이드 소요시간 제거
            banner.style.transition = "transform 0s";
            // 0.7초 뒤에 실행
        }, 700);
        // 초기화
        count = 1;
    }
    // 클릭한 곳에 색을 넣어준다
    changeButtonStyle();
    // 인터벌 복구
    slide = setInterval(() => autoSlide(), 2000);
    // check값 true로 복구
    setTimeout(() => {check = true}, 700);
});


// 슬라이드 동작
function autoSlide(){
    // check를 false로 초기화
    check = false;
    // 왼쪽으로 이동, 슬라이드 소요시간 0.7초
    banner.style.transform = `translate(${-970 * ++count}px)`;
    banner.style.transition = "transform 0.7s";
    
    // 마지막 이미지에서
    if(count == 7){
        // 실행시간 설정
        setTimeout(() => {
            // 배너 위치 다시 첫 번째 사진으로 이동
            banner.style.transform = `translate(-970px)`;
            // 슬라이드 소요시간 제거
            banner.style.transition = "transform 0s";
            // 0.7초 뒤에 실행
        }, 700);
        // 초기화
        count = 1;
        
    }
    // 배너 슬라이드 실행 동안 count - 1 칸에 있는 dot 스타일 변경 
    changeButtonStyle();
    // 배너 넘어가는 동안 prev(), next() 작동 방지
    console.log(changeButtonStyle());
    setTimeout(() => {
        check = true;
    }, 700);
}