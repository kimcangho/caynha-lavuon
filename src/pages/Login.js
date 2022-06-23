import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  //React Router navigation hook
  const navigate = useNavigate();

  //State hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); //To be used later after authentication built out

  //Side effect hooks
  useEffect(() => {
    localStorage.setItem("storedUsername", JSON.stringify(username));
    localStorage.setItem("storedPassword", JSON.stringify(password));
  }, [username, password]);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form className="modal__content">
        <div className="login__field">
          <label for="username">Ten</label>
          <br></br>
          <input
            type="text"
            name="username"
            placeholder="Ten"
            className="input__button"
            onChange={handleUsername}
          ></input>
        </div>
        <div className="login__field">
          <label for="username">Mat Ma</label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Mat Ma"
            className="input__button"
            onChange={handlePassword}
          ></input>
        </div>
        <div>
          <button
            className="access-button login__field"
            onClick={() => navigate("/newsfeed")} //Login to newsfeed
          >
            Di Vao
          </button>
        </div>
        <img src={require("../images/steffen-b-qDZ-Xd8dX6w-unsplash.jpg")} />
      </form>
    </div>
  );
}
