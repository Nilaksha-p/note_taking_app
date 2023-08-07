import logo from './logo.svg';
import './App.css';

function Notetakingapp({tittle,add,button,one,two,three,four,five,six,Remove,}){
  return(
    <div className='form'>
      <div className='box'>
        <div className='first'>
          <h3>{tittle}</h3>
        </div>
        <div className='second'>
          <p>{add}</p>
          <button>{button}</button>
        </div>
        <div className='third'>
          <ul>
          <li>{one}<span>{Remove}</span></li>  
          <li>{two}<span>{Remove}</span></li>
          <li>{three}<span>{Remove}</span></li>
          <li>{four}<span>{Remove}</span></li>
          <li>{five}<span>{Remove}</span></li>
          <li>{six}<span>{Remove}</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function App() {
  const items = {
    
  }
  return (
    <div className="App">
      <Notetakingapp
      tittle='Notes'
      add='Add Note'
      button='Add'
      one='Set a reminder beforehand'
      two='Find a location'
      three='Screenshot the address'
      four='Book the tickets'
      five='Find out the parking'
      six='Call them'
      Remove='Remove'
      />
    </div>
  );
}

export default App;
