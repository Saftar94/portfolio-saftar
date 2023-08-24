import { HeaderButtonIcon } from "./headerButtonIcon";
import { lang } from "../shared/staticText/staticText";
import { Link } from "react-router-dom";

export const HeaderText = () => {
  return (
    <Link to={"/"}>
      <HeaderButtonIcon text={lang.en.Headername} />
    </Link>
  );
};
