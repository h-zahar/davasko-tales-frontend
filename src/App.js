import './App.css';



import AuthProvider from './contexts/AuthProvider';
import initializeAuthentication from './firebase/firebase.init';

initializeAuthentication();

function App() {
  return (
    <>
      <AuthProvider>
        
      </AuthProvider>
    </>
  );
}

export default App;
