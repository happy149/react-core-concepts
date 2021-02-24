import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman','ayesha','alia']
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Alia Reader', price: '$66.99'}
  ]
  //const productNames = products.map(product => product.name);
  //const nayokNames = nayoks.map(nayok => nayok);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <ul>{
          nayoks.map(nayok => <li>{nayok}</li>)
          
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          </ul>

          

        <ul>
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>


        </ul>
        {
          products.map(product => <Product product={product}></Product>)

        }
        
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
    //const newCount = count + 1;
    //setCount(newCount);
    //setCount(count + 1);
  

  return(
  <div>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
    <button onClick={() =>setCount(count + 1)}>Increase</button>
    </div>)
  
}

function Product(props){
  
    const productStyle={
      border: '1px solid grey',
      borderRadius: '5px',
      backgroundColor: 'lightgrey',
      height: '200px',
      width: '200px',
      float: 'left'
    }
    const {name, price} = props.product;
    return (
      <div style={productStyle}>
        <h2>{name}</h2>
        <h5>{price}</h5>
        <button>Buy now</button>
      </div>
  )
}


function Person(props){
   return (
     <div style={{border: '2px solid gold', width: '400px', margin: '5px'}}>
       <h3>My name: {props.name}</h3>
       <p>My profession: {props.job}</p>
     </div>
   )
}

export default App;
