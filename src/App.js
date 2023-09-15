import { Header } from "./components/header/header";
import { HomePage } from "./components/homePage/homePage";

import { Routes, Route } from "react-router-dom";
import { AboutMe } from "./components/aboutMe/aboutExample";
import { Contacts } from "./contacts/contacts";
import useToken from "./useToken";

function App(isOpen) {
  const { token, setToken } = useToken();

  if (!token) {
    return <Contacts setToken={setToken} />;
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="contacts" element={<AboutMe />} />
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
