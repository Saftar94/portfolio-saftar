import Container from "../container/constainer";
import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import { SkillsList } from "./SkilsList";
import { theme } from "../style/theme";
const HappyCustomerblock = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;
const HappyCustomerHead = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.17;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: ${theme.color.HeaderLogocolor};
  text-align: center;
  margin-bottom: 18px;
  @media screen and (min-width: 480px) {
    font-size: 35px;
  }
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`;

const HappyCuoUl = styled.ul`
list-style: none;
display: grid;

flex-wrap: wrap;
list-style: none;
margin-left: 0;
justify-content: space-between;
grid-template-columns:  1fr 1fr 1fr 1fr;
@media screen and (min-width:768px){
  display: flex;

}
}`;

const HappyCuLi = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-basis: ${({ flexBasis }) => flexBasis || "calc(100%/4 - 30px)"};
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const HappySvg = styled.a``;
export const Skills = () => {
  return (
    <HappyCustomerblock>
      <Container>
        <FcMindMap
          style={{
            marginBottom: "20px",
            height: "40px",
            width: "40px",
          }}
        />
        <HappyCustomerHead>{lang.en.HappyCustomer}</HappyCustomerHead>

        <HappyCuoUl>
          {SkillsList.map((item) => (
            <HappyCuLi key={item.id}>
              <HappySvg>{item.svg}</HappySvg>
            </HappyCuLi>
          ))}
        </HappyCuoUl>
      </Container>
    </HappyCustomerblock>
  );
};
