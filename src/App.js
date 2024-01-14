import { Header } from "./components/header/header";
import { HomePage } from "./components/homePage/homePage";

import { Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/aboutMe/aboutExample";

function App(isOpen) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
