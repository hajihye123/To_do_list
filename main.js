'use strict';
const TODOS_KEY = "todos"

let itemList = [];  // 할 일을 저장하는 리스트
let input_btn = document.querySelector(".input_button");
input_btn.addEventListener("click", addItem);    // 추가 버튼에 클릭 리스너를 연결
let clock = document.getElementById("clock");   // 날짜 시각 표시

// 시간 표시
function showClock() {
    let time = new Date();

    let month = time.getMonth() + 1;
    let date = time.getDate();
    let day = time.getDay();
    let week = ['일', '월,', '화', '수', '목', '금', '토'];

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    clock.innerHTML = '지금은 ' + month + '월 ' + date + '일 ' + week[day] + '요일 ' + hour + '시 ' + minute + '분 ' + second + '초에요';
}

// 리스트에 추가
function addItem() {
    let item = document.querySelector(".item").value;
    if (item == "" || item == null) {
        alert("내용 입력 플리즈");
        return false;
    }

    let jsondata = {
        "task": item,
        "state": "none"
    }
    if (item != null){
        itemList.push(jsondata);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }
    saveTodos();
    showList();
}

// 리스트에서 삭제
function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    saveTodos();
    showList();
}


// 할 일 클릭-> state 변경
function line_through() {
    let id = this.getAttribute("id");
    
    if (itemList[id].state == "none") {   
        itemList[id].state="done";
        showList();
    }

    else if (itemList[id].state=="done") {
        itemList[id].state="none";
        showList();
    }
    saveTodos();
}


// localstorage에 저장하기 - addItem, deleteItem 진행 후 실행해서 localstorage 업데이트 필요함
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(itemList));  // 배열처럼 보이는 문자열을 저장
}

// 리스트 보여주기
function showList() {
    let list = "<ul>";
    let temp = "";

    // 새로고침할 때 localstorage에 저장된 state를 반영하여 나타내기
    for (let i = 0; i < itemList.length; i++) {
        
        if (itemList[i].state == "none") {  // 줄이 그어져 있지 않은 상태라면
            list += "<li>" + "<span class='myitem' id=" + i + ">" + itemList[i].task +"</span>"+ "<span class='close' id=" + i + ">" + " ❌" + "</span></li>";
        }
        else if (itemList[i].state == "done") {
            //list += "<li>" + "<span style=\"text-decoration: line-through; background-color: #EAEAEA;\" class='myitem' id=" + i + ">" + itemList[i].task +"</span>"+ "<span class='close' id=" + i + ">" + " ❌" + "</span></li>";
            temp += "<li>" + "<span style=\"text-decoration: line-through; background-color: #EAEAEA;\" class='myitem' id=" + i + ">" + itemList[i].task +"</span>"+ "<span class='close' id=" + i + ">" + " ❌" + "</span></li>";
        }
    }
    list += temp;
    list += "</ul>";
    document.querySelector(".item_list").innerHTML = list;

    let delete_btn = document.querySelectorAll(".close");
    for (let i = 0; i < delete_btn.length; i++) {
        delete_btn[i].addEventListener("click", deleteItem);
    }

    // 줄 그으면
    let myitemm = document.querySelectorAll(".myitem");
    for (let i = 0; i < myitemm.length; i++) {
        myitemm[i].addEventListener("click", line_through);
        
    }

}

// 초기화
function init() {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos !== null) {
        const parsedToDos = JSON.parse(savedTodos);     // 배열같은 문자열 "[a,b,c]"를 진짜 배열 [a,b,c]로 만들기
        itemList = parsedToDos;     // localstorage에 저장된 내용을 기존 배열에 담아줌-> 새로고침할 때마다 갱신됨
    }
    showList();
}

// 엔터 쳐도 추가되게 하기
function Enter_Check(){
    // 엔터키의 코드는 13
    if(event.keyCode == 13){
        addItem();  // 실행할 이벤트
    }
}

init();
showClock();
setInterval(() => {
    showClock()
}, 1000);