import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import mainTheme from '../colors/MainTheme';
import { useTodoState } from './TodoContext';


const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  text-align: center;
  
`;

const GnbLists = styled.ul`
  list-style: none;
  height: 60px;
  margin: auto;
  padding: 0;
`;

const GnbItem = styled.li`
  display: inline-block;
  height: 60px;
  a {
    font-family: ${mainTheme.mainFont};
    display: block;
    position: relative;
    height: 60px;
    line-height: 65px;
    font-size: 16px;
    font-weight: 500;
    padding: 0 0px;
    margin: 0 16px;
    text-decoration: none;
    color: ${mainTheme.mainTextColor};
  }
  .active {
    border-bottom: solid 3px ${mainTheme.mainOrangeColor};
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long'
  })

  return (
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className='day'>{dayName}</div>
            <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
            <Nav>
                <GnbLists>
                    <GnbItem>
                    <NavLink to="/">홈</NavLink>
                    </GnbItem>
                    <GnbItem>
                    <NavLink to="/about">소개</NavLink>
                    </GnbItem>
                </GnbLists>
            </Nav>

        </TodoHeadBlock>
        
    );
}

export default TodoHead;