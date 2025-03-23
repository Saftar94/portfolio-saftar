import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  // overflow-x: hidden; // заважає на сторінці статистики. компоненти в абсолюті обрізає
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding-left: ${(props) => props.sidePaddings || "15px"};
    padding-right: ${(props) => props.sidePaddings || "15px"};
    max-width: ${(props) => props.sideWidth || "100%"};
  }
  @media screen and (min-width: 768px) {
    padding-left: ${(props) => props.sidePaddings || "20px"};
    padding-right: ${(props) => props.sidePaddings || "20px"};
    width: ${(props) => props.sideWidth || "100%"};
  }
  @media screen and (min-width: 1200px) {
    padding-left: ${(props) => props.sidePaddings || "80px"};
    padding-right: ${(props) => props.sidePaddings || "80px"};
    width: ${(props) => props.sideWidth || "100%"};
  }
  @media screen and (min-width: 1920px) {
    padding-left: ${(props) => props.sidePaddings || "136px"};
    padding-right: ${(props) => props.sidePaddings || "136px"};
    width: ${(props) => props.sideWidth || "100%"};
  }
`;

export default Container;
