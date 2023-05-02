import { Header } from "./components/header/header";
import { HomePage } from "./components/homePage/homePage";
import { AboutMe } from "./components/aboutMe/aboutMe";
import { Experience } from "./components/experience/experience";
import { Awards } from "./components/awards/awards";
import { Portfolio } from "./components/portfolio/portfolio";
import { Services } from "./components/services/services";
import { HappyCustomer } from "./components/happyCustomer/happyCustomer";
import { Footer } from "./components/footer/footer";
function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutMe />
      <Experience />
      <Awards />
      <Portfolio />
      <Services />
      <HappyCustomer />
      <Footer />
    </>
  );
}

export default App;
