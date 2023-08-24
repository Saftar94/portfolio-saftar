import { BlockIcan } from "../blockIcan/blockIcan";
import { AboutMe } from "../aboutMe/aboutMe";
import { Experience } from "../experience/experience";
import { Awards } from "../awards/awards";
import { Portfolio } from "../portfolio/portfolio";
import { Services } from "../services/services";
import { HappyCustomer } from "../happyCustomer/happyCustomer";
import { Footer } from "../footer/footer";

export const MainPageLink = () => {
  return (
    <>
      <BlockIcan />
      <AboutMe />
      <Experience />
      <Awards />
      <Portfolio />
      <Services />
      <HappyCustomer />
      <Footer />
    </>
  );
};
