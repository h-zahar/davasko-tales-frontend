import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/login';
import Register from './pages/Register/Register';


import AuthProvider from './contexts/AuthProvider';
import initializeAuthentication from './firebase/firebase.init';

initializeAuthentication();

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/register'>
              <Register />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
