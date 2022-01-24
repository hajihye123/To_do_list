'use strict';
const TODOS_KEY = "todos"

let itemList = [];  // 할 일을 저장하는 리스트
let input_btn = document.querySelector(".input_button");
input_btn.addEventListener("click", addItem);    // 추가 버튼에 클릭 리스너를 연결
let clock = document.getElementById("clock");   // 날짜 시각 표시


// 지도 표시
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();



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

    clock.innerHTML = '지금은 ' + month + '월 ' + date + '일 ' + week[day] + '요일 ' + hour + '시 ' + minute + '분 ' + second + '초입니다';
}

// 리스트에 추가
function addItem() {
    let item = document.querySelector(".item").value;
    let address = document.querySelector(".address").value;
    
    if (item == "" || item == null) {
        alert("내용 입력 플리즈");
        return false;
    }

    let jsondata = {
        "task": item,
        "state": "none",
        "address": address
    }
    if (item != null){
        itemList.push(jsondata);
        document.querySelector(".item").value = "";
        document.querySelector(".address").value = "";
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

// 주소 클릭-> 지도 이동
function search_address() {
    let id = this.getAttribute("id");

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(itemList[id].address, function(result, status) {

    // 정상적으로 검색이 완료됐으면 
     if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">선택 위치</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    } 
});   

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
            list += "<li>" + "<span class='myitem' id=" + i + ">" + itemList[i].task +"</span>" + "<span class='myaddress' id=" + i + ">" + itemList[i].address +"</span>" + "<span class='close' id=" + i + ">" + " ❌" + "</span></li>";
        }
        else if (itemList[i].state == "done") {
            //list += "<li>" + "<span style=\"text-decoration: line-through; background-color: #EAEAEA;\" class='myitem' id=" + i + ">" + itemList[i].task +"</span>"+ "<span class='close' id=" + i + ">" + " ❌" + "</span></li>";
            temp += "<li>" + "<span style=\"text-decoration: line-through; background-color: #EAEAEA;\" class='myitem' id=" + i + ">" + itemList[i].task +"</span>" + "<span class='myaddress' id=" + i + ">" + itemList[i].address +"</span>" + "<span class='close' id=" + i + ">" + " ❌" + "</span></li>";
        }
    }
    list += temp;
    list += "</ul>";
    document.querySelector(".item_list").innerHTML = list;

    // 삭제버튼에 삭제 이벤트 추가
    let delete_btn = document.querySelectorAll(".close");
    for (let i = 0; i < delete_btn.length; i++) {
        delete_btn[i].addEventListener("click", deleteItem);
    

    // 할일 클릭하면 줄 긋는 이벤트 추가
    let myitemm = document.querySelectorAll(".myitem");
    for (let i = 0; i < myitemm.length; i++) {
        myitemm[i].addEventListener("click", line_through);
    }

    // 주소 클릭하면 위치 띄우는 이벤트 추가
    let myaddresss = document.querySelectorAll(".myaddress");
    for (let i = 0; i < myaddresss.length; i++) {
        myaddresss[i].addEventListener("click", search_address);
    }

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