import './App.css';
import {Route, Switch} from 'react-router-dom';
import Auth from './pages/Auth';
import Countries from './pages/Countries';
import {useState, useEffect} from 'react';
import AuthCheck from './components/AuthCheck';

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

  let country = <Auth setIsLoggedIn = {setIsLoggedIn}/>;
  if (isLoggedIn) {
    country = <Countries/>
  }

  let personalRoutes = [
    <Route path = "/personal/home"><h1>Test</h1></Route>,
    <Route path = "/personal/emails">{country}</Route>,
    <Route path = "/personal/dashboard"><h1>Test2</h1></Route>,
    <Route path = "/personal/profile">{country}</Route>
  ];

  let authCheck = <Auth setIsLoggedIn = {setIsLoggedIn}/>;

  return (
    <Switch>
      <Route exact path = "/">
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          <Countries/>
        </AuthCheck>
      </Route>

      <Route path = "/auth">
        <Auth setIsLoggedIn = {setIsLoggedIn}/>
      </Route>

      <Route path = "/personal">
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          {personalRoutes}
        </AuthCheck>
        {/*isLoggedIn?personalRoutes:authCheck*/}
      </Route>

      <Route path = "/countries" >
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          <Countries/>
        </AuthCheck>
        {/* country */}
      </Route>
    </Switch>
  );
}

export default App;