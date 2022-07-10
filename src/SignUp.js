import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const authentication = getAuth();
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authentication,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="form-panel two">
      <div className="form-header">
        <h1>Register Account</h1>
      </div>
      <div className="form-content">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required="required"
              onChange={(event) => {
                event.preventDefault();
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required="required"
              onChange={(event) => {
                event.preventDefault();
                setRegisterPassword(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <button type="submit" onClick={register}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
