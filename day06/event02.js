// HTMLCollection 객체에서 forEach 사용하도록 프로퍼티 설정
HTMLCollection.prototype.forEach = Array.prototype.forEach;
// 객체 불러오기
    const button = document.getElementById("register");
    const arDiv = document.getElementsByClassName("square");
    // 사각형을 클릭했을 때 이름을 보여줄 함수
    function showCharacter(name){
        for(let i=0; i<arDiv.length; i++){
            arDiv[i].addEventListener("click", function(){
                arDiv[i].innerHTML = name[i];
            });
        }
    }

    // 이름을 입력하고 등록버튼을 클릭했을 때 실행되는 함수
    function register(callback){
        // Array객체를 전역변수에 담을 때 각 요소 사이에 ,가 들어간다.
        // globalThis.name = document.getElementsByName("name")[0].value.split("");

        let text = "";
        let name = document.getElementsByName("name")[0].value;

        arDiv.forEach(div => div.innerHTML = "");
        for(let i=0; i<3-globalThis.name.length; i++){
            text += "♥";
        }
        name += text;
        callback(name);
    }