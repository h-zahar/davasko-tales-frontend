import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import TellATale from './pages/TellATale/TellATale';
import Login from './pages/Login/login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';


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

            <Route exact path='/add'>
              <TellATale />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/register'>
              <Register />
            </Route>

            <Route exact path='/dashboard'>
              <Dashboard />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
