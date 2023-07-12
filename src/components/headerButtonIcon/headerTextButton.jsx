import { HeaderButtonIcon } from "./headerButtonIcon";
import { lang } from "../shared/staticText/staticText";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderText = () => {
  return (
    <WrapperLink>
      <Link to={"/"}>
        <HeaderButtonIcon text={lang.en.Headername} />
      </Link>
    </WrapperLink>
  );
};
const WrapperLink = styled.div`
  /* margin-top: 15px; */
  /* margin-bottom: 29px; */
`;
