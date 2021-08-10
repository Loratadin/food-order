import { useState } from 'react';

import Header from '../src/components/Layout/Header';
import Meals from '../src/components/Meals/Meals';
import Cart from '../src/components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => { setCartIsShown(true) }
  const hideCartHandler = () => { setCartIsShown(false) }

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
