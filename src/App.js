import logo from './logo.svg';
import './App.css';
import app from './firebaseInit';
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
