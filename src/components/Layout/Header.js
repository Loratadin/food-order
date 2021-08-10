import React from 'react';
import MealsImage from '../../assets/main.png';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {
    return <>
        <div className={classes["header-container"]}>
            <header className={classes.header}>
                <h1>Food Delivery</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
        </div>
        <div className={classes["main-image"]}>
            <img src={MealsImage} alt="different meals"/>
        </div>
    </>
}
export default Header;