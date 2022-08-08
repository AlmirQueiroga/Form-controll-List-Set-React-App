import {  Box, Tab } from "@mui/material";
import React from "react";
import CadastroForm from "../../components/CadastroForm/CadastroForm";
import { Background, BackgroundCard } from "./home.styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";


export default function Home(): JSX.Element{

  const [tabs, setTabs] = React.useState(1)

	return(
		<Background>
      <BackgroundCard>
        <TabContext value={tabs.toString()}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={e => console.log(e)} aria-label="lab API tabs example">
              <Tab label="Cadastro" value="1" onClick={() => setTabs(1)}/>
              <Tab label="Lista" value="2" onClick={() => setTabs(2)}/>
            </TabList>
          </Box>
          <TabPanel value="1"><CadastroForm /></TabPanel>
          <TabPanel value="2">Lista</TabPanel>
        </TabContext>
        <br/>

      </BackgroundCard>       
		</Background>
	)
}