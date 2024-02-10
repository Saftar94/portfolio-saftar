import { Header } from "./components/header/header";
import { HomePage } from "./components/homePage/homePage";

import { Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/aboutMe/aboutExample";
import { Contacts } from "./components/contacts/contacts";
import LoginPage from "./components/contacts/Login";
import PrivateRoute from "./components/contacts/PrivateRoute";
import React, { useState } from "react";

function App(isOpen) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" // Check initial login state
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutMe />} />
        <Route
          path="login"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="contacts" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
    </>
  );
}

export default App;

// import React, { Component } from "react";
// import {BrowserRouter as Switch, Route, Router } from "react-router-dom";
// import Rooms from "./contacts/Rooms";
// import Chat from "./contacts/Chat";

// class App extends Component {
//   render() {
//     return (
// <>
//         <Header />
//           <Router>
//             <Route path="/" element={<HomePage />} />
//             <Route path="about" element={<AboutMe />} />
//             <Route path="contacts" element={<Contacts />} />
//               <Route path="/room/:roomId" component={Chat} />
//               <Route path="/Rooms" component={Rooms} />
//           </Router>
//           </>
//     );
//   }
// }

// export default App;
