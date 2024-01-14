import { Experience } from "../experience/experience";
import { Education } from "../education/education";
import { Portfolio } from "../portfolio/portfolio";
import { Services } from "../services/services";
import { Skills } from "../Skills/skills";
import { Footer } from "../footer/footer";
import { HelpSection } from "../headerButtonIcon/helpButtonScroll";
import MailTab from "../sendmail/sendMail";

export const MainPageLink = () => {
  return (
    <>
      <HelpSection />
      <Experience />
      <Education />
      <Portfolio />
      <Services />
      <Skills />
      <Footer />
      <MailTab />
    </>
  );
};
