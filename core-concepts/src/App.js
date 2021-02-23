import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        
        
        
      </header>
    </div>
  );
}
function Person(){

  return (
  <div style={{border:'2px solid yellow',margin:'10px'}}>
    <h1> Name:Hosneara Happy</h1> 
    <h3> i am a mother of Ayesha Alia</h3>
    </div>
  )
}

export default App;
