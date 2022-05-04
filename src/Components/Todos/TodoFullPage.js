import React from 'react';
import classes from './TodoFullPage.module.css'


const TodoFullPage = (props) => {
  const {task , fullname , abouttask} = props;
  return (
    <div className={classes.justify}>
      <h2>
          {task}
        </h2>
        <h3>
          {abouttask}
        </h3>  
        <h5>
            {fullname}
          </h5>
    </div>
  )
}

export default TodoFullPage;