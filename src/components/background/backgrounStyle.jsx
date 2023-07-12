import styled from "styled-components";
// import { theme } from '../style/theme'

// export const BackgroundImg = styled.div`
//   position: relative;
//   width: 1200px;
//   height: 800px;
//   z-index: -100;
//   background-image: ${(props) =>
//     props.imgUrl2
//       ? `url(${props.imgUrl2}), url(${props.imgUrl2})`
//       : `url(${props.imgUrl2})`};
//       background-color: ${theme.color.primaryColor};
//   background-repeat: no-repeat;
//   background-size: ${(props) => props.size2x || ' auto'};
// `

import ImgBacj from "../image&svg/imgae/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg";

const BackgroundImg = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${ImgBacj});
`;

//   const Backgroun =()=>{
//     <BackgroundImg/>
// }
//
export default BackgroundImg;
