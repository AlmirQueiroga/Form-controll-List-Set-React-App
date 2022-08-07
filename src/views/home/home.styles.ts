import styled from "styled-components";
import BackgroundImage from "../../assets/background.jpg"

const Background = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export{Background}