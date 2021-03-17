import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import kyc from 'kyc';
import Card from './Card';

function App() {

  const [countryList, setCountryList] = useState([])

  let url = 'https://restcountries.eu/rest/v2/all';
  let options = {
    method:"GET",
    //timeDiff: '1d',
    //component:item=><li>{item.name}</li>,
    //log:true
  };

  useEffect(()=>{

    //axios({url, ...options}).then(res => console.log('axios', res.data)); 

    /* fetch(url,options).then(result=>result.json().then(output=>{
      console.log('fetch',output)
    })); */

    //kyc(url, options).then(res => console.log('kyc', res));

    fetch(url, options).then(result => {
          console.log(result);
          result.json().then(output => {
            console.log(output);
            //Code goes here...
            setCountryList(output.map(item=><Card 
                                              imgSrc = {item.flag} 
                                              name = {item.name}
                                              />
            ));
          })
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {countryList}
      </header>
    </div>
  );
}

export default App;
