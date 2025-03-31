import { v4 as uuid } from "uuid";
import { useLanguage } from "../context/LanguageContext";
import { lang } from "../shared/staticText/staticText";
import * as All from "../image&svg/svg/svgExport";

// Локализованные данные для навыков с прогресс-барами
export const useSkillsList = () => {
  const { language } = useLanguage();
  const text = lang[language];

  const skillsList = [
    {
      id: uuid(),
      skillsHead: text.htmlCss,
      skillstext: "95%",
      width: "95%",
    },
    {
      id: uuid(),
      skillsHead: text.javascript,
      skillstext: "80%",
      width: "80%",
    },
    {
      id: uuid(),
      skillsHead: text.react,
      skillstext: "90%",
      width: "90%",
    },
    {
      id: uuid(),
      skillsHead: text.nodeJs,
      skillstext: "70%",
      width: "70%",
    },
    {
      id: uuid(),
      skillsHead: text.typescript,
      skillstext: "65%",
      width: "65%",
    },
    {
      id: uuid(),
      skillsHead: text.git,
      skillstext: "85%",
      width: "85%",
    },
    {
      id: uuid(),
      skillsHead: text.figma,
      skillstext: "75%",
      width: "75%",
    },
    {
      id: uuid(),
      skillsHead: text.responsive,
      skillstext: "95%",
      width: "95%",
    },
  ];

  return skillsList;
};

export const SkillsList = [
  {
    id: uuid(),
    svg: <All.React />,
  },
  {
    id: uuid(),
    svg: <All.Html />,
  },
  {
    id: uuid(),
    svg: <All.Css />,
  },
  {
    id: uuid(),
    svg: <All.Scss />,
  },
  {
    id: uuid(),
    svg: <All.Js />,
  },
  {
    id: uuid(),
    svg: <All.Git />,
  },
  {
    id: uuid(),
    svg: <All.Redux />,
  },
  {
    id: uuid(),
    svg: <All.NodeJs />,
  },
  {
    id: uuid(),
    svg: <All.MongoDb />,
  },
  {
    id: uuid(),
    svg: <All.Babel />,
  },
  {
    id: uuid(),
    svg: <All.Webpack />,
  },
  {
    id: uuid(),
    svg: <All.Figma />,
  },
];
