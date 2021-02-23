import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name="Munna" job="football"></Person>
        <Person name="Abul" job="Dorshok"></Person>
        
      </header>
    </div>
  );
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
