import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext';
import TodoFullPage from '../Components/Todos/TodoFullPage';
import { useParams } from 'react-router-dom';

const DetailTodo = () => {
  const {todos} = useContext(TodoContext);
  const params = useParams();

  const findTodo = todos.find((todo)=>todo.id === params.todoid)

  return (
    <TodoFullPage task = {findTodo.task} fullname = {findTodo.fullname} abouttask = {findTodo.abouttask} />
  )
}

export default DetailTodo;