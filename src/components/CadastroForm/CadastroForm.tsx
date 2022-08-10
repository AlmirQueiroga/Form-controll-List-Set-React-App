import React, { useState, useEffect } from 'react';
import { useFormik, FormikHelpers } from 'formik'
import Cadastro from '../../models/cadastro'
import * as Yup from 'yup'
import api from "../../resources/api";
import { GenderCheckbox, TextInput, Form } from "./cadastro.styles";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, Select } from "@mui/material";
import moment from 'moment'
import { EditarState } from '../../store/edit/type.d';

import { removeEditar } from '../../store/edit/actions'

interface CadastroFormProps {
  onFinish: () => void
}

export default function CadastroForm(props: CadastroFormProps): JSX.Element {
  const initialValues = useSelector((state: EditarState) => state.editar)
  const [jsonList, setJsonList] = useState([]);
  const dispatch = useDispatch()
  const [enableReinitialize, setEnableReinitialize] = useState<boolean>(false)
  const { onFinish } = props

  const onSubmit = (value: any, formikHelpers: FormikHelpers<Cadastro>) => {
    let valid = true
    
    Object.keys(value).forEach(key => {
      if (value[key] === '' || value[key] === undefined) {
        setFieldError(key, 'Campo obrigatório')
        valid = false
      }      
      else if(!value.orgaoExpeditor.value){
        setFieldError("orgaoExpeditor", 'Campo obrigatório')
        valid = false
      }
    })
    if (valid){
      if (values.dtExpedicao) {
        values.dtExpedicao = moment(values.dtExpedicao).format('DD-MM-YYYY')
      }
      if(initialValues){
        api.put(`/list/${initialValues.id}`, values)
        onFinish()
      }else{
        api.post("/list",values) 
        onFinish()
      }
    }
  }

  
  const { values, setFieldError, setFieldValue, touched, errors, handleSubmit, isValid, handleBlur } = useFormik<Cadastro>({
    validateOnBlur: true, 
    validateOnChange: false,
    enableReinitialize,
    initialValues: initialValues ?? {
      id: undefined,
      nrRg: '',
      orgaoExpeditor: undefined,
      dtExpedicao: undefined,
      tpSexo: 0
    },
    onSubmit: onSubmit,
    validationSchema: Yup.object().shape({
      nrRg: Yup.string(),
      orgaoExpeditor: Yup.object(),
      dtExpedicao: Yup.date(),
      tpSexo: Yup.number()
    })
  })
  
  useEffect(()=>{
    api.get("/orgao_emissor").then((res:any) => {setJsonList(res.data[0].orgao_emissor); setFieldValue('orgaoExpeditor', res.data[0].orgao_emissor[0])})
  },[])

  useEffect(() => {
    if (!initialValues) setEnableReinitialize(true)
  }, [initialValues])

  return (
    <Form>
      <div>
        <TextInput
          label="RG"
          value={values.nrRg}
          onChange={e => setFieldValue('nrRg', e.target.value)}
          error={errors.nrRg !== undefined}
          onBlur={handleBlur}
        />

      </div>
      <br />
      <div >
        <FormControl error={errors.orgaoExpeditor !== undefined}>
          <InputLabel id="orgao-expeditor-id" >Orgão Expeditor</InputLabel>
          <Select
            labelId="orgao-expeditor-id"
            value={values.orgaoExpeditor}
            label="orgao-expeditor"
            onChange={(e: any) => setFieldValue('orgaoExpeditor', e.target.value)}
            style={{ width: 260 }} 
            onBlur={handleBlur}
          >
            {jsonList.map((item: any, index: number) => (
              <MenuItem value={item} key={index}>{item.label}</MenuItem>
            ))}

          </Select>
        </FormControl>
      </div>
      <br />
      <div >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data de Expedição"
            onChange={e => { e && setFieldValue('dtExpedicao', e) }}
            value={values.dtExpedicao ?? null}
            maxDate={new Date()}
            renderInput={(params: any) => 
              <TextInput
                name='dtExpedicao'
                {...params} 
                error={errors.dtExpedicao !== undefined}
                onBlur={handleBlur}
              />
            }
          />
        </LocalizationProvider>
      </div>
      <br />
      <div >
        <br />
        <GenderCheckbox
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Masculino"
          name="radio-buttons-group">

          <FormControlLabel
            value="Masculino"
            control={
              <Radio onClick={() => setFieldValue('tpSexo', 0)}  checked={values.tpSexo === 0} onBlur={handleBlur}/>
            }
            label="Masculino"
          />
          <FormControlLabel
            value="Feminino"
            control={
              <Radio onClick={() => setFieldValue('tpSexo', 1)}  checked={values.tpSexo === 1} onBlur={handleBlur}/>
            }
            label="Feminino"
          />
        </GenderCheckbox>
      </div>
      <br />
      <div style={{ display: 'flex', width: '100%', justifyContent: initialValues ? 'space-between' : 'center' }}>
      {initialValues && <Button variant="contained" onClick={(e: any) => dispatch(removeEditar())}>Cancelar</Button>}
      <Button variant="contained" onClick={(e: any) => handleSubmit(e)} disabled={!isValid}>{initialValues ? 'Salvar' : 'Adicionar'}</Button>
      </div>
    </Form>
  )
}