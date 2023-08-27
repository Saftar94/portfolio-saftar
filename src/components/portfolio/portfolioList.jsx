import { v4 as uuid } from "uuid";

import filmoteka1 from "../image&svg/imgae/filmotekaX1.jpg";
import Elenashop from "../image&svg/imgae/ElenaShopx1.jpeg";
import HellEnglish from "../image&svg/imgae/hellEnglishX1.jpg";
import WebStudio from "../image&svg/imgae/WebStudio.jpeg";

export const portfolioList = [
  {
    id: uuid(),
    image: filmoteka1,
    button: "Filmoteka",
    about: "Beautiful site for finding movies and movie notes!",
    link: "https://saftar94.github.io/Filmoteka/",
  },
  {
    id: uuid(),
    image: Elenashop,
    button: "ElenaShop",
    about: "Website for women's fashion!",
    link: "https://nikitamelnychencko.github.io/eleanshop/",
  },
  {
    id: uuid(),
    image: HellEnglish,
    button: "Hell&English",
    about: "Beautiful site for English courses!",
    link: "https://viktor-kostiuchenko.github.io/hellen-english/",
  },
  {
    id: uuid(),
    image: WebStudio,
    button: "WebStudio",
    about: "Web studio for designers and their team!",
    link: "https://saftar94.github.io/goit-markup-hw-08/GOIT%20DZ8/",
  },
];
