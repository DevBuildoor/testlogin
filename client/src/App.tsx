import { useState } from "react";
import axios from "axios";

import "./styles.css";

function App() {
  // React States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event: any) => {
    //Prevent page reload
    console.log(event);
    setUsername(event.target.value);
  };
  const handleChangePassword = (event: any) => {
    //Prevent page reload
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (username !== "" && password !== "") {
      setIsSubmitted(true);
      axios
        .post("http://localhost:8000/signin", {
          username: username,
          password: password,
        })
        .then((response) => console.log("There was an suvcces!", response))
        .catch((error) => {
          console.error("There was an error!", error);
        });
    } else {
      setIsSubmitted(false);
      console.log("VIDE");
    }
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                name="uname"
                value={username}
                onChange={handleChangeUsername}
                required
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                value={password}
                onChange={handleChangePassword}
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
        {isSubmitted && <div>User is successfully logged in</div>}
      </div>
    </div>
  );
}

export default App;
