import { v4 as uuid } from "uuid";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";

export const useAboutMeList = () => {
  const { language } = useLanguage();
  const text = lang[language];

  return [
    {
      id: uuid(),
      firstname: text.aboutBornIn,
      lastname: text.aboutAzerbaijan,
    },
    {
      id: uuid(),
      firstname: text.aboutExperience,
      lastname: text.aboutExperienceYears,
    },
    {
      id: uuid(),
      firstname: text.aboutLocation,
      lastname: text.aboutStockholm,
    },
  ];
};

// Сохраняем оригинальный список для обратной совместимости
export const list = [
  {
    id: uuid(),
    firstname: "BORN IN",
    lastname: "AZERBAIJAN",
  },
  {
    id: uuid(),
    firstname: "EXPERIENCE",
    lastname: "+3 Years",
  },
  {
    id: uuid(),
    firstname: "Location",
    lastname: "Stockholm",
  },
];
