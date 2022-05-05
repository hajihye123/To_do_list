import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About.js';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './components/TodoContext';
import TodoHead from './components/TodoHead';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
