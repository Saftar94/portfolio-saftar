import Container from "../container/constainer";
import styled from "styled-components";
import { FcMindMap } from "react-icons/fc";
import { lang } from "../shared/staticText/staticText";
import { HappyCustomerList } from "./happyCustomerList";
const HappyCustomerblock = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;
const HappyCustomerHead = styled.p`
  font-family: Bai Jamjuree;
  font-style: normal;
  font-size: 45px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: #161513;
  margin-bottom: 18px;
`;

const HappyCuoUl = styled.ul`
list-style: none;
display: flex;

flex-wrap: wrap;
list-style: none;
margin-left: 0;
justify-content: space-between;
}`;

const HappyCuLi = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-basis: ${({ flexBasis }) => flexBasis || "calc(100%/4 - 30px)"};
  align-items: center;

  border-radius: 51%;
  border: 2px solid;
  margin-top: 30px;
`;

const HappySvg = styled.a``;
export const HappyCustomer = () => {
  return (
    <Container>
      <HappyCustomerblock>
        <FcMindMap
          style={{
            marginBottom: "20px",
            height: "40px",
            width: "40px",
          }}
        />
        <HappyCustomerHead>{lang.en.HappyCustomer}</HappyCustomerHead>

        <HappyCuoUl>
          {HappyCustomerList.map((item) => (
            <HappyCuLi key={item.id}>
              <HappySvg>{item.svg}</HappySvg>
            </HappyCuLi>
          ))}
        </HappyCuoUl>
      </HappyCustomerblock>
    </Container>
  );
};
