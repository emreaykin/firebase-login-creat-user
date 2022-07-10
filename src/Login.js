import { useEffect, useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import "./Firebase.js";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  const authentication = getAuth();

  useEffect(() => {
    onAuthStateChanged(authentication, (currentUser) => {
      setUser(currentUser);
    });
  }, [authentication]);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        authentication,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(authentication);
  };

  if (user?.email) {
  }
  return (
    <div className="form-panel one">
      <div className="form-header">
        <h1>Account Login</h1>
      </div>
      <div className="form-content">
        <form>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="#email"
              name="email"
              required="required"
              onChange={(event) => {
                event.preventDefault();
                setLoginEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="#password"
              name="password"
              required="required"
              onChange={(event) => {
                event.preventDefault();
                setLoginPassword(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label className="form-remember">
              <input type="checkbox" />
              Remember Me
            </label>
            <a className="form-recovery" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <div className="form-group">
          <button onClick={login} style={{ marginBottom: "5px" }}>
            Log In
          </button>
          <button onClick={logout}>Log out</button>
          <h4> User Logged In: {user?.email}</h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
