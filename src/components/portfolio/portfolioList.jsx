import { v4 as uuid } from "uuid";

import filmotekax2 from "../image&svg/imgae/filmotekaX1.jpg";
import filmotekax1 from "../image&svg/imgae/filmotekaX2.jpeg";
import Elenashop from "../image&svg/imgae/ElenaShopx1.jpeg";
import Elenashopx2 from "../image&svg/imgae/ElenaShopx2.jpeg";
import HellEnglish from "../image&svg/imgae/hellEnglishX1.jpg";
import HellEnglishx2 from "../image&svg/imgae/hellEnglishX2.jpeg";
import WebStudio from "../image&svg/imgae/WebStudio.jpeg";
import WebStudiox2 from "../image&svg/imgae/WebStudiox2.jpeg";

export const portfolioList = [
  {
    id: uuid(),
    image: filmotekax1,
    image2: filmotekax2,
    button: "Filmoteka",
    about: "Beautiful site for finding movies and movie notes!",
    link: "https://saftar94.github.io/Filmoteka/",
  },
  {
    id: uuid(),
    image: Elenashop,
    image2: Elenashopx2,
    button: "ElenaShop",
    about: "Website for women's fashion!",
    link: "https://nikitamelnychencko.github.io/eleanshop/",
  },
  {
    id: uuid(),
    image: HellEnglish,
    image2: HellEnglishx2,
    button: "Hell&English",
    about: "Beautiful site for English courses!",
    link: "https://viktor-kostiuchenko.github.io/hellen-english/",
  },
  {
    id: uuid(),
    image: WebStudio,
    image2: WebStudiox2,
    button: "WebStudio",
    about: "Web studio for designers and their team!",
    link: "https://saftar94.github.io/goit-markup-hw-08/GOIT%20DZ8/",
  },
];
