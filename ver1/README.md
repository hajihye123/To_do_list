# To do list

웹 공부 - 투두리스트 만들기



### showClock

현재 날짜와 시각을 표시한다. setInterval()을 사용하여 1초마다 반복되도록 설정했다.



### addItem

JSON 키 값은 "todos" 이다.

이때, 사용자가 입력한 task와 그 task를 수행했는지 여부를 state로 하여 저장한다.



### deleteItem

리스트에서 삭제한다.



### line_through

task를 클릭하면 task의 state를 변경하고, showList를 실행해서 화면을 업데이트한다.



### search_address

주소를 클릭하면 카카오맵에서 주소를 검색하고 지도에 마커를 표시한다.



### saveTodos

투두리스트를 local storage에 저장하여 새로고침하거나 페이지를 종료해도 데이터를 유지하기 위해 사용한다.



### showList

새로고침할 때, 리스트를 보여준다.

for문을 통해 모든 task를 받아오고, state에 따라 line-through 여부를 결정한다.

처음 만들 때부터 HTML 태그 입력하는거 말고 다른 방식으로 했어야 하는데 지금 바꾸려니 귀찮아서 못 바꾸겠다.

그리고 여기에 삭제 버튼, 할일 리스트, 주소 리스트를 받아와서 내가 원하는 이벤트를 추가해준다.



### init

문자열로 저장한 투두리스트를 배열로 변환하여 받아온다.



### Enter_Check

추가 버튼을 클릭하는 대신, 엔터 버튼을 눌러도 입력되도록 한다.



### 참고 사이트

- 카카오 지도 API: https://apis.map.kakao.com/web/
- 로컬 웹서버 구축: https://jsitclub.tistory.com/56
- CSS 목록 스타일: https://www.walterz.net/2017/07/31/css-%EA%B9%94%EB%81%94%ED%95%9C-%EB%AA%A9%EB%A1%9D-%EC%8A%A4%ED%83%80%EC%9D%BC-css-list-style/
- CSS 파일 변경 후 적용이 안될 때: https://meaownworld.tistory.com/89