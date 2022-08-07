import styled from "styled-components";
import BackgroundImage from "../../assets/background.jpg"
import { Card, RadioGroup, TextField } from "@mui/material";

const Background = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BackgroundCard = styled(Card)`
  padding:25px;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff !important;
  flex-direction: column;
`

const Label = styled.span`
  color: black;
  font-size: medium;
  align-self:flex-start;
  margin-right: 20px;
`

const GenderCheckbox = styled(RadioGroup)`
  font-size: small;
  color: black;
`

const TextInput = styled(TextField)`
  color: white;
`

export{Background, BackgroundCard, Label, GenderCheckbox,TextInput}