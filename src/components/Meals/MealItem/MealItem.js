import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartContext = useContext(CartContext);
    const { meal } = props;
    const price = `$${meal.price.toFixed(2)}`;
    const addToCartHandler = amount => {
        cartContext.addItem({
            id: meal.id,
            name: meal.name,
            amount,
            price: meal.price,
        })
    }

    return <li className={classes.meal}>
        <div>
            <h3>{meal.name}</h3>
            <div className={classes.description}>{meal.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddAmount={addToCartHandler} />
        </div>
    </li>
}
export default MealItem;