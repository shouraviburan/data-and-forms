import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [countryList, setCountryList] = useState([])

  let url = 'https://restcountries.eu/rest/v2/all';
  let options = {
    method:"GET"
  };

  useEffect(()=>{
    fetch(url, options).then(result => {
          console.log(result);
          result.json().then(output => {
            console.log(output);
            //Code goes here...
            setCountryList(output.map(item=><li>{item.name}</li>));
          })
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>{countryList}</ul>
      </header>
    </div>
  );
}

export default App;
