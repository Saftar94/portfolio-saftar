import { v4 as uuid } from "uuid";

import filmotekax1 from "../image&svg/imgae/filmotekaX1.jpg";
import filmotekax2 from "../image&svg/imgae/filmotekaX2.jpeg";
import filmotekax3 from "../image&svg/imgae/filmotekaX3.jpeg";
import Elenashopx1 from "../image&svg/imgae/ElenaShopx1.jpeg";
import Elenashopx2 from "../image&svg/imgae/ElenaShopx2.jpeg";
import Elenashopx3 from "../image&svg/imgae/ElenaShopx3.jpeg";
import HellEnglish from "../image&svg/imgae/hellEnglishX1.jpg";
import HellEnglishx2 from "../image&svg/imgae/hellEnglishX2.jpeg";
import HellEnglishx3 from "../image&svg/imgae/hellEnglishX3.jpeg";
import WebStudio from "../image&svg/imgae/WebStudiox1.jpeg";
import WebStudiox2 from "../image&svg/imgae/WebStudiox2.jpeg";
import WebStudiox3 from "../image&svg/imgae/WebStudiox3.jpeg";
import inventoryX1 from "../image&svg/imgae/inventoryX1.jpg";
import inventoryX2 from "../image&svg/imgae/inventoryX2.jpg";
import inventoryX3 from "../image&svg/imgae/inventoryX3.jpg";

// export const portfolioList = [
//   {
//     id: uuid(),
// image: filmotekax1,
// image2: filmotekax2,
// image3: filmotekax3,
//     button: "Filmoteka",
//     about: "Beautiful site for finding movies and movie notes!",
//     link: "https://saftar94.github.io/Filmoteka/",
//   },
//   {
//     id: uuid(),
// image: Elenashopx1,
// image2: Elenashopx2,
// image3: Elenashopx3,
//     button: "ElenaShop",
//     about: "Website for women's fashion!",
// link: "https://nikitamelnychencko.github.io/eleanshop/",
//   },
//   {
//     id: uuid(),
// image: HellEnglish,
// image2: HellEnglishx2,
// image3: HellEnglishx3,
//     button: "Hell&English",
//     about: "Beautiful site for English courses!",
//     link: "https://viktor-kostiuchenko.github.io/hellen-english/",
//   },
//   {
//     id: uuid(),
// image: WebStudio,
// image2: WebStudiox2,
// image3: WebStudiox3,
//     button: "WebStudio",
//     about: "Web studio for designers and their team!",
// link: "https://saftar94.github.io/goit-markup-hw-08/GOIT%20DZ8/",
//   },
// ];

export const portfolioList = [
  {
    id: uuid(),
    title: "Filmoteka",
    image: filmotekax1,
    image2: filmotekax2,
    image3: filmotekax3,
    description:
      "The website allows users to search for movies, view detailed descriptions, and save favorites.",
    category: "Front-end",
    stack: [
      "HTML,CSS ",
      "JavaScript (ES6+) ",
      "Handlebars",
      "TMDB API",
      "Firebase",
    ],
    highlights:
      "Filmoteka is a web application for searching and viewing movie information. It uses The Movie Database (TMDB) API to fetch data about movies, including descriptions, ratings, posters, and genres.",
    link: "https://github.com/Saftar94/Filmoteka",
    demo: "https://saftar94.github.io/Filmoteka/", // Опционально
    year: "2023",
  },
  {
    id: uuid(),
    title: "eleanshop",
    image: Elenashopx1,
    image2: Elenashopx2,
    image3: Elenashopx3,
    description:
      "The website provides a seamless shopping experience, allowing users to explore products, add them to the cart, and proceed to checkout",
    category: "Front-end",
    stack: [
      "HTML, CSS",
      "JavaScript (ES6+)",
      "Handlebars",
      "firebase",
      "webpack",
      "bootstrap",
    ],
    highlights:
      "The website is built using HTML for structuring content, SCSS for advanced styling and better maintainability, JavaScript (ES6+) to handle interactive elements and dynamic functionality, and Webpack for module bundling and performance optimization.",
    link: "https://github.com/Saftar94/Elenashop",
    demo: "https://nikitamelnychencko.github.io/eleanshop/", // Опционально
    year: "2023",
  },
  {
    id: uuid(),
    title: "HellEnglish",
    image: HellEnglish,
    image2: HellEnglishx2,
    image3: HellEnglishx3,
    description:
      "Hellen English is an educational website designed to help users learn English. It features an intuitive interface, structured lessons, and interactive elements for an engaging learning experience.",
    category: "Front-end",
    stack: ["HTML", "SCSS", "JavaScript (ES6+)"],
    highlights:
      "The website is built using HTML for structuring content, SCSS for advanced styling and better maintainability, JavaScript (ES6+) to handle interactive elements and dynamic functionality",
    link: "https://github.com/Viktor-Kostiuchenko/hellen-english",
    demo: "https://viktor-kostiuchenko.github.io/hellen-english/", // Опционально
    year: "2023",
  },
  {
    id: uuid(),
    title: "WebStudio",
    image: WebStudio,
    image2: WebStudiox2,
    image3: WebStudiox3,
    description:
      "The GoIT Markup HW-08 project is a responsive multi-page website designed with modern web technologies to ensure a clean layout, smooth interactivity, and accessibility on different devices.s",
    category: "Front-end",
    stack: ["HTML", "SCSS", "JavaScript (ES6+)", "CSS Flexbox & Grid"],
    highlights:
      "The website is built using HTML for structuring content, SCSS for advanced styling and better maintainability, JavaScript (ES6+) to handle interactive elements and dynamic functionality, and CSS Flexbox & Grid for responsive design.",
    link: "https://github.com/Saftar94/goit-markup-hw-08",
    demo: "https://saftar94.github.io/goit-markup-hw-08/GOIT%20DZ8/", // Опционально
    year: "2023",
  },
  {
    id: uuid(),
    title: "INVENTORY",
    image: inventoryX1,
    image2: inventoryX2,
    image3: inventoryX3,
    description:
      "The website allows users to manage inventory, add products, and track stock levels.",
    category: "Front-end",
    stack: ["React", "Redux", "HTMl", "SCSS", "Styled Components"],
    highlights:
      "The website is built using React, Redux, HTML, SCSS, and Styled Components for a clean and responsive design.",
    link: "https://github.com/Saftar94/orders-products",
    demo: "https://saftar94.github.io/orders-products/",
    year: "2023",
  },
];
