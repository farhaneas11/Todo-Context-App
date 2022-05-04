import { Route,Routes } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import AllTodo from './Pages/AllTodo';
import DetailTodo from './Pages/DetailTodo';
import NewTodo from './Pages/NewTodo';
import NotFound from './Pages/NotFound';
import TodoContextProvider from './Context/TodoContext';

function App() {
  return (
    <Layout>
      <TodoContextProvider>
        <Routes>
          <Route exact path='/' element={<AllTodo/>}/>
          <Route path='/todos' element={<AllTodo/>}/>
          <Route path='/newtodos' element={<NewTodo/>}/>
          <Route path='/todos/:todoid' element={<DetailTodo/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </TodoContextProvider>
    </Layout>
  );
}

export default App;
