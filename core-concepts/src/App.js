import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name:"Dr.Mahfuz",
    job:"Singer"
  }
  var person2 = {
    name:"Eva Rahman",
    job:"kokil kondhi"
  }
  var style = {
    color:'red',
    backgroundColor:'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react paragraph</p>
        <h1>My heading : {(2+5)*5*6}</h1>
        <h1 style={style}>Singer: {person.name+" " +person.job}</h1>
        <h3 style= {{backgroundColor:'cyan', color:'yellow'}}>My heading : {person2.name+" " +person2.job}</h3>
      
      </header>
    </div>
  );
}

export default App;
