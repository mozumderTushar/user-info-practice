import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from './fakeData/user-info'
import Users from './components/Users/Users';
import Cart from './components/Cart/Cart';


function App() {
  // console.log(fakeData)
  const [users, setUsers] = useState(fakeData);
  const [cart, setCart] = useState([]);

  const handleAddFriend = (user) => {
    console.log("added",user);
    const newCart = [...cart,user];
    setCart(newCart)
  }

  return (
    <div className="users-container">
      <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
      <div className="user-data">
        <ul>
            {
              users.map(user => <Users handleAddFriend={handleAddFriend} key={user.id} user={user}></Users>)
            }
        </ul>
        </div>
    </div>
  );
}

export default App;
