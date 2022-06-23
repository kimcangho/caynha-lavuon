//React modules
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
//External CSS
import "./App.css";
//React components
import Header from "./components/Header";
import Footer from "./components/Footer";
//React pages
import Login from "./pages/Login";
import Newsfeed from "./pages/Newsfeed";
import Error from "./pages/Error";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  //login flag

  //Log in user
  const loginUser = (event) => {
    event.preventDefault();
    setIsLoggedIn((prevLoggedInState) => !prevLoggedInState);
    console.log(isLoggedIn);
  };

  return (
    <> {/*React fragment*/}
      {!isLoggedIn && <Header loginUser={loginUser} />} {/* Fixed Header */}
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="newsfeed" element={<Newsfeed />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div>
        <Footer /> {/* Fixed Footer */}
      </div>
    </>
  );
}

export default App;
