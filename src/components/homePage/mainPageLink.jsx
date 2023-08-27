import { Experience } from "../experience/experience";
import { Awards } from "../awards/awards";
import { Portfolio } from "../portfolio/portfolio";
import { Services } from "../services/services";
import { HappyCustomer } from "../happyCustomer/happyCustomer";
import { Footer } from "../footer/footer";

export const MainPageLink = () => {
  return (
    <>
      <Experience />
      <Awards />
      <Portfolio />
      <Services />
      <HappyCustomer />
      <Footer />
    </>
  );
};

// ticker
// import { BlockIcan } from "../blockIcan/blockIcan";
/* <BlockIcan /> */
