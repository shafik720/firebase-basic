import logo from './logo.svg';
import './App.css';
import app from './firebaseInit';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';



function App() {
  const [user, setUser] = useState([]);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  function handleAuthentication(){
    signInWithPopup(auth, provider)
    .then(result=>{
      console.log(result);
      setUser(result.user)
    }).catch(error=>{
      console.log(error)
    })
  }
  function handleSignOut(){
    signOut(auth).then(() => {
      setUser([]);
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="App">
      <h2>Hello</h2>
      <button onClick={handleAuthentication}>Sign in with google</button>
      <button onClick={handleSignOut}>Sign Out</button>
      <h2>Name : {user.displayName} </h2>
      <h3>Email : {user.email} </h3>
    </div>
  );
}

export default App;
