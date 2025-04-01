import { v4 as uuid } from "uuid";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";

export const useExperienceList = () => {
  const { language } = useLanguage();
  const text = lang[language];

  const experienceList = [
    {
      id: uuid(),
      number: "4 +",
      experincetext: text.yearsOfExperience,
    },
    {
      id: uuid(),
      number: "10 +",
      experincetext: text.projectsCompleted,
    },
    {
      id: uuid(),
      number: "7 +",
      experincetext: text.happyClients,
    },
  ];

  return experienceList;
};
