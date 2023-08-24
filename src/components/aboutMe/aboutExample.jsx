import Container from "../container/constainer";
import styled from "styled-components";
const Main = styled.h1`
  colort: red;
`;

export const AboutMeExample = () => {
  return (
    <Container style={{ overflowX: "visible" }}>
      <Main>Hello New Page!!</Main>
    </Container>
  );
};
