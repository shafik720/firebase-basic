import logo from './logo.svg';
import './App.css';
import app from './firebaseInit';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function handleAuthentication(){
  console.log('go');
}

function App() {
  return (
    <div className="App">
      <button onClick={handleAuthentication}>Google Sign In</button>
    </div>
  );
}

export default App;
