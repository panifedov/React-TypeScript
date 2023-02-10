import {BrowserRouter, Link, Route, Routes , } from 'react-router-dom'
import UserPages from './component/UserPages';
import TodosPage from './component/TodosPage';
import UserItemPage from './component/UserItemPage';
import TodosItemPage from './component/TodosItemPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={'/users'}>
          Пользователи
        </Link>
        <Link to={'/todos'}>
          Список дел
        </Link>
        <Routes>
        <Route path="/users" element={<UserPages/>}/>
        <Route path="/todos" element={<TodosPage/>}/>
        <Route path="/users/id:" element={<UserItemPage/>}/>
        <Route path="/todo/id:" element={<TodosItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;