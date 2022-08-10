import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import api from "../../resources/api";
import { useDispatch } from 'react-redux';
import { ListGrid, Item } from "./lista.styles";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { addEditar } from '../../store/edit/actions';

interface listaProps {
  onEdit: () => void
}

export default function Lista(props: listaProps): JSX.Element {

  const [list, setList] = useState([])
  const [selectedId, setSelectedId] = useState()
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const { onEdit } = props

  useEffect(()=>{
    api.get("/list").then((res:any) => setList(res.data))
  },[])   

  const handleDialog = (state: boolean) => {
    setOpen(state);
  };

  const handleDelete = (index:number,id:any) => {
    api.delete(`/list/${id}`).then((res) => setList(list.filter((item:any) => item.id !== id)));
    setOpen(false);
  };

  const handleEdit = (id: number) => {
    const item = list.find((item: any) => item.id === id)
    if (item) {

      dispatch(addEditar(item)) 
      onEdit()
    }
  }


  return(
    
    <ListGrid container spacing={1} style={{minWidth:500}}>
      <Item style={{backgroundColor:"#2c2ff2"}}>
        <ListGrid item xs={2}>
          RG
        </ListGrid>
        <ListGrid item xs={2}>
          Orgão Emissor
        </ListGrid>
        <ListGrid item xs={2}>
          Data de Expedição
        </ListGrid>
        <ListGrid item xs={3}>
          Sexo
        </ListGrid>
        <ListGrid item xs={2}>
          Opções
        </ListGrid>
      </Item>
      {list?.map((item:any,index)=>(
        <Item key={index}>
          <ListGrid item xs={2}>
            {item.nrRg}
          </ListGrid>
          <ListGrid item xs={2}>
            {item.orgaoExpeditor.label}
          </ListGrid>
          <ListGrid item xs={2}>
            {item.dtExpedicao.replaceAll('-', '/')}
          </ListGrid>
          <ListGrid item xs={3}>
            {item.tpSexo === 0 ? 'Masculino' : 'Feminino'}
          </ListGrid>
          <ListGrid item xs={1}>
            <IconButton aria-label="delete" onClick={()=>{handleDialog(true); setSelectedId(item.id)}}>
              <DeleteIcon/>
            </IconButton>
            <Dialog
              open={open}
              onClose={()=>handleDialog(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Deseja mesmo deletar o cadastro selecionado?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Ao deletar não será possível restaurar tal cadastro
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>handleDialog(false)}>Cancelar</Button>
                <Button onClick={()=>handleDelete(index, selectedId)} autoFocus>
                  Deletar
                </Button>
              </DialogActions>
            </Dialog>
          </ListGrid>
          <ListGrid item xs={1}>
            <IconButton aria-label="edit" onClick={()=>{handleEdit(item.id)}}>
              <EditIcon />
            </IconButton>
          </ListGrid>
        </Item>
      ))}
    </ListGrid>
    
  )

}