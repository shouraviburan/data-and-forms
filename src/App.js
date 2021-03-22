import './App.css';
import {Route, Switch} from 'react-router-dom';
import Auth from './pages/Auth';
import Countries from './pages/Countries';
import {useState, useEffect} from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //checks local storage and updates the state
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (

    <Switch>
      <Route exact path = "/">
        <div className="App">
          <h1>Welcome on Countries & Auth App!</h1>
        </div>
      </Route>

      <Route path = "/auth">
        <Auth setIsLoggedIn = {setIsLoggedIn}/>
      </Route>

      <Route path = "/countries" component = {isLoggedIn?Countries:Auth} />


    </Switch>
  );
}

export default App;