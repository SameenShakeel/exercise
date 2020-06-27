import React from 'react';
import AddressLabel from './AddressLabel';
import './App.css';

function App() {
  let person = {
    name: 'Mr. Sender',
    address: '123 Fake St.',
    city: 'Boston',
    state: 'MA',
    zipcode: '02118'
   }
  
  return (
    <div className="container">
      <AddressLabel person={{...person}} />
    </div>
  );
}

export default App;
