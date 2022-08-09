import { Grid, Paper } from "@mui/material";
import styled from "styled-components";

const ListGrid = styled(Grid)`
`

const Item = styled(Paper)`
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export{ListGrid, Item}