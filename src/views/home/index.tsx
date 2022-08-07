import {  Button, FormControlLabel, Radio} from "@mui/material";
import React from "react";
import { Background, BackgroundCard, GenderCheckbox, TextInput } from "./home.styles";

export default function Home(): JSX.Element{

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  
	return(
		<Background>
      <BackgroundCard>
        <div >
          <TextInput label="RG"/>
        </div>
        <br/>
        <div >
          <TextInput label="Orgão Expeditor"/>
        </div>
        <br/>
        <div >
          <TextInput label="Data de Emissão"/>
        </div>
        <br/>
        <div >
          <br/>
          <GenderCheckbox
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Masculino"
            name="radio-buttons-group"> 

            <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
            <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
          </GenderCheckbox>
        </div>
        <br/>
        <Button variant="contained">Adicionar</Button>
      </BackgroundCard>       
		</Background>
	)
}