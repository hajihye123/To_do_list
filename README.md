# To do list

웹 공부 - 투두리스트 만들기

추가 및 변경하고 싶은 것

- 전체 삭제
- 날짜 시간 표시
- X 표시 오른쪽 정렬
- 버튼 모양



### addItem

JSON 키 값은 "todos" 이다.

이때, 사용자가 입력한 task와 그 task를 수행했는지 여부를 state로 하여 저장한다.



### deleteItem

리스트에서 삭제한다.



### line_through

task를 클릭하면 task의 state를 변경하고, showList를 실행해서 화면을 업데이트한다.



### saveTodos

투두리스트를 local storage에 저장하여 새로고침하거나 페이지를 종료해도 데이터를 유지하기 위해 사용한다.



### showList

새로고침할 때, 리스트를 보여준다.

for문을 통해 모든 task를 받아오고, state에 따라 line-through 여부를 결정한다.

처음 만들 때부터 HTML 태그 입력하는거 말고 다른 방식으로 했어야 하는데 지금 바꾸려니 귀찮아서 못 바꾸겠다.



### init

문자열로 저장한 투두리스트를 배열로 변환하여 받아온다.

