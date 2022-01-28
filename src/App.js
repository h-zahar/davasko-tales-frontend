import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import TellATale from './pages/TellATale/TellATale';
import Login from './pages/Login/login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AdminRoute from './pages/AdminRoute/AdminRoute';


import AuthProvider from './contexts/AuthProvider';
import initializeAuthentication from './firebase/firebase.init';
import OwnTales from './pages/Home/OwnTales/OwnTales/OwnTales';
import Footer from './pages/Shared/Footer/Footer';
import SingleTale from './pages/DynamicRoute/SingleTale/SingleTale';
import EditTale from './pages/DynamicRoute/EditTale/EditTale';

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

            <Route exact path='/own'>
              <OwnTales />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/register'>
              <Register />
            </Route>

            <Route exact path='/single/:id'>
              <SingleTale />
            </Route>

            <Route exact path='/edit/:id'>
              <EditTale />
            </Route>

            <AdminRoute path='/dashboard'>
              <Dashboard />
            </AdminRoute>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
