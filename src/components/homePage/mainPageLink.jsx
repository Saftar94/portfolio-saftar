import React from "react";
import { motion } from "framer-motion";
import { ScrollUpButton } from "../headerButtonIcon/helpButtonScroll";
import DelayedSuspense from "../shared/DelayedSuspense";
import backImage from "../image&svg/imgae/background-gif.gif";

const Experience = React.lazy(() =>
  import("../experience/experience").then((module) => ({
    default: module.Experience || module.default,
  }))
);
const Education = React.lazy(() =>
  import("../education/education").then((module) => ({
    default: module.Education || module.default,
  }))
);
const Services = React.lazy(() =>
  import("../services/services").then((module) => ({
    default: module.Services || module.default,
  }))
);
const Skills = React.lazy(() =>
  import("../Skills/skills").then((module) => ({
    default: module.Skills || module.default,
  }))
);

export const MainPageLink = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="background-container">
        <img src={backImage} alt="background" className="background-gif" />
      </div>

      <ScrollUpButton />

      <DelayedSuspense>
        <div className="content-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={pageVariants}
          >
            <Experience />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={pageVariants}
          >
            <Education />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={pageVariants}
          >
            <Skills />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={pageVariants}
          ></motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={pageVariants}
          >
            <Services />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={pageVariants}
          ></motion.div>
        </div>
      </DelayedSuspense>
    </>
  );
};
