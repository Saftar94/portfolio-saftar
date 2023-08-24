import { Header } from "./components/header/header";
import { HomePage } from "./components/homePage/homePage";

import { Routes, Route } from "react-router-dom";
import { AboutMeExample } from "./components/aboutMe/aboutExample";

function App(isOpen) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutMeExample />} />
      </Routes>
    </>
  );
}

export default App;

// {/* <>
//       <Header />
//       <HomePage/>
//       <AboutMe />
//       <Experience />
//       <Awards />
//       <Portfolio />
//       <Services />
//       <HappyCustomer />
//       <Footer />
//       </> */}
