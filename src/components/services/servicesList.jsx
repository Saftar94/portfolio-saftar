import { v4 as uuid } from "uuid";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";

export const useServicesList = () => {
  const { language } = useLanguage();
  const text = lang[language];

  const servicesList = [
    {
      id: uuid(),
      header: text.serviceWebDev,
      about: text.serviceWebDevDesc,
    },
    {
      id: uuid(),
      header: text.serviceWebDesign,
      about: text.serviceWebDesignDesc,
    },
    {
      id: uuid(),
      header: text.serviceUiUx,
      about: text.serviceUiUxDesc,
    },
    {
      id: uuid(),
      header: text.serviceArtDirection,
      about: text.serviceArtDirectionDesc,
    },
  ];

  return servicesList;
};
