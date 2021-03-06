import {Fragment} from 'react';
import Header from './Header';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Fragment>
        <Header/>
        <main className={classes.layout}>
            {props.children}
        </main>
    </Fragment>
    )
}

export default Layout;