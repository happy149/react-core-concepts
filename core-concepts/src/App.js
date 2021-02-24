import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Product product={products[0]}></Product>
        
      </header>
    </div>
  );
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
    return (
      <div style={productStyle}>
        <h2>{props.product.name}</h2>
        <h5>{props.price}</h5>
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
