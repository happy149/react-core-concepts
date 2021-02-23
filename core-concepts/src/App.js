import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name={nayoks[0]} nayika="Moushumi"></Person>
        <Person name="Jasim" nayika="Shabana"></Person>
        <Person name="BappaRaj" nayika="Cheka"></Person>
        <Person name="ELias K" nayika="Bobita"></Person>
        
        
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props);
  return (
  <div style={personStyle}>
    <h1> Nayok: {props.name}</h1> 
    <h3> Hero of {props.nayika}</h3>
    </div>
  )
}

export default App;
