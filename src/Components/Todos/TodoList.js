import React,{useContext , Fragment} from 'react';
import { TodoContext } from '../../Context/TodoContext';
import TodoItem from './TodoItem';
import NoTodoFound from './NoTodoFound';
import classes from './TodoList.module.css';
import { useNavigate , useLocation } from 'react-router-dom';

const sortTodo = (todo , ascending)=>{
  return todo.sort((sortA,sortB)=>{
    if (ascending) {
      return sortA.id > sortB.id ? 1 : -1;
    }else{
      return sortA.id < sortB.id ? 1 : -1;
    }
  })
};

const TodoList = (props) => {
  const history = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';  

  const {todos} = useContext(TodoContext);

  const sortedTodo = sortTodo(todos , isSortingAscending);

  const sortHandler = ()=>{
    history({
      pathname : location.pathname,
      search : `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    })
  };

  return todos.length? (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <div>
        <ul className={classes.list}>
          {sortedTodo.map((todo)=>{
            return <TodoItem key={todo.id} id={todo.id} fullname ={todo.fullname} task={todo.task} />
          })}
        </ul>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <NoTodoFound/>
    </Fragment>
  )
}

export default TodoList