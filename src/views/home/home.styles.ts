import styled from "styled-components";
import BackgroundImage from "../../assets/background.jpg"
import { Card } from "@mui/material";

const Background = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface BackgroundCardProps {
  list: boolean
}

const BackgroundCard = styled(Card)`
  padding:25px;
  width: ${({ list }: BackgroundCardProps) => list ? 800 : 350}px;
  margin-top: ${({ list }: BackgroundCardProps) => !list ? 150 : 0}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff !important;
  flex-direction: column;
`

export{Background, BackgroundCard}