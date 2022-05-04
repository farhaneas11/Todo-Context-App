import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContext } from '../../Context/TodoContext';
import { useNavigate } from 'react-router-dom';

import classes from './TodoForm.module.css';

const schema = yup.object({
    fullname: yup.string().required(),
    task : yup.string().required(),
    abouttask : yup.string().required(),
  }).required();

const TodoForm = () => {    
    const navigate = useNavigate();
    const { register, handleSubmit, formState:{ errors } , reset } = useForm({
        resolver: yupResolver(schema)
      });
      const {dispatch} = useContext(TodoContext);
      const onSubmit = (data) => {        
        dispatch({ type: 'ADD_TODO', todos: data });        
        console.log(data);
        reset();        
        alert('Added');
        navigate('/');
    }
    
      return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.formcontrol}>
          <input type="text" className={classes.inputcontrol} {...register("fullname")} placeholder='Name'/>
          <p>{errors.fullname?.type === 'required' && "Name is Required"}</p>
            
          <input type="text" className={classes.inputcontrol} {...register("task")} placeholder='Todo'/>
          <p>{errors.task?.type === 'required' && "Todo is Required"}</p>

          <textarea type="text" className={classes.inputcontrol} cols="30" rows="10" {...register('abouttask')} placeholder='About Todo'></textarea>
          <p>{errors.abouttask?.type === 'required' && "About the Todo is required"}</p>
          
          <button type='submit'>
              Add Todo
          </button>
        </form>
      );
}

export default TodoForm;