import React from 'react';
import Envelope from './Envelope';
import Stamp from './Stamp.jpg'; 
import './App.css';

function App() {
  let person1 = {
    name: 'Mr. Sender',
    address: '123 Fake St.',
    city: 'Boston',
    state: 'MA',
    zipcode: '02118'
   }

   let person2 = {
    name: 'Mrs. Receiver',
    address: '123 Fake St.',
    city: 'San Francisco',
    state: 'CA',
    zipcode: '94101'
   }
  
  return (
    <div className="container">
      <img src={Stamp} alt="Stamp" className="stamp"></img>
      <Envelope toPerson={{ ...person1 }} fromPerson={{...person2 }}/>
    </div>
  );
}

export default App;
