import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = props => {
    const cartContext = useContext(CartContext);
    const total = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;
    const cartItemRemoveHandler = id => { };
    const cartItemAddHandler = item => {
        const updated = cartContext.addItem(item)
    };
    const cartItems = <ul className={classes['cart-items']}>{cartContext.items.map(item => (
        <CartItem
            key={item.id}
            item={item}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
    ))}</ul>;
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{total}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
};
export default Cart;