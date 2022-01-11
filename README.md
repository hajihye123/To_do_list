# To_do_list

투두리스트 만들기



### addItem

JSON 키 값은 "todos" 이다.

이때, 사용자가 입력한 task와 그 task를 수행했는지 여부를 state로 하여 저장한다.



### deleteItem

리스트에서 삭제한다.



### line_through

task를 클릭하면 task의 상태에 따라 줄이 그어지거나 사라진다.

아직 잘 다루지를 못해서 showList와 기능이 섞여 있다.



### saveTodos

투두리스트를 local storage에 저장하여 새로고침하거나 페이지를 종료해도 데이터를 유지하기 위해 사용한다.



### showList

새로고침할 때, 리스트를 보여준다.

for문을 통해 모든 task를 받아오고, state에 따라 line-through 여부를 결정한다. 지저분하다.



### init

문자열로 저장한 투두리스트를 배열로 변환하여 받아온다.