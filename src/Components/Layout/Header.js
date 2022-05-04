import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../UI/Card';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
        <Card>
            <div className={classes.space}>
                <div>
                    <h1>
                        Todo-App
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/todos' activeClassName='active'>
                                All Todos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/newtodos' activeClassName='active'>
                                New Todos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Card>
    </header>
  )
}

export default Header;