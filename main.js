'use strict';

let itemList = [];
let input_button = document.querySelector(".input_button");
input_button.addEventListener("click", addItem);

// 리스트에 추가
function addItem() {
    let item = document.querySelector(".item").value;
    if (item != null){
        itemList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }
    showList();
}

// 리스트 보여주기
function showList() {
    let list = "<ul>";
    // 내용 추가
    for (let i = 0; i < itemList.length; i++) {
        list += "<li>" + itemList[i] + "</li>";
    }
    list += "</ul>";
    document.querySelector(".item_list").innerHTML = list;
    
}