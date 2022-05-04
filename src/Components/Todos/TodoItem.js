import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../../Context/TodoContext';
import classes from './TodoItem.module.css'

const TodoItem = (props) => {
  const {dispatch} = useContext(TodoContext);
  const {fullname , task , id} = props  
  return (
    <li className={classes.item}>      
      <Link to={`/todos/${id}`}>
        <figure>
          <blockquote>
            {task}
          </blockquote>
          <figcaption>
            {fullname}
          </figcaption>
        </figure>
      </Link>
      <button onClick={()=>dispatch({type : 'REMOVE_TODO' , id : id})}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem;