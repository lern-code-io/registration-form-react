import { useState } from "react";
import "./App.css";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleAuth() {
    // implement this function
  }

  function handleSignOut() {
    // implement this function
  }

  function handleToggleView() {
    // implement this function
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <h2>Weclome, {/* user email here */}!</h2>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
         <h2>{isSignedUp ? "Sign In" : "Sign Up"}</h2>
          <form>
            <input
              type="email"
              placeholder="Email"
   
            />
            <input
              type="password"
              placeholder="Password"
              
            />
            <button onClick={handleAuth}>
            {isSignedUp ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p>
            {isSignedUp
              ? "Don't have an account? Sign up now"
              : "Already have an account? Sign in"}
          </p>
          <button onClick={handleToggleView}>
            {isSignedUp ? "Sign Up" : "Sign In"}
          </button>
        </>
      )}
    </>
  );
}

export default App;
