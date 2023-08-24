import styled from "styled-components";
import { ListIcan } from "./listIcan";
import Marquee from "react-fast-marquee";

const BlockIcanDo = styled.div`
  display: flex;
  align-items: center;
  color: black;
  height: 50px;
  background-color: #0490a3;
  transform: rotate(-365deg);
  margin-top: 65px;

  @media screen and (min-width: 768px) {
    margin-top: 35px;
  }
`;

const BlockIcanItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const BlockIcan = () => {
  return (
    <BlockIcanDo>
      <Marquee
        direction="right"
        gradientColor="[0,0,0]"
        speed="120"
        style={{
          height: 30,
        }}
      >
        <BlockIcanItem>
          <ListIcan text="Developer" />
          <ListIcan text="HTML" />
          <ListIcan text="Scss" />
          <ListIcan text="React" />
          <ListIcan text="Js" />
          <ListIcan text="Rest api" />
        </BlockIcanItem>
      </Marquee>
    </BlockIcanDo>
  );
};
