import { fireEvent, getByTestId, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CadastroForm from "./CadastroForm";

describe('Teste de cadastro',()=>{
  it('teste sucedido', async () =>{

    const handleSubmit  = jest.fn;
    const handleFinish = jest.fn

    const cadastroForm = render(<CadastroForm onFinish={handleFinish}/>)

    const rg = cadastroForm.getByTestId('rg');
    const orgaoExpeditor = cadastroForm.getByTestId('orgao-expeditor');
    const dtExpedicao = cadastroForm.getByTestId('dtExpedicao');
    const tpSexo = cadastroForm.getByTestId('tpSexo');
    const submitButton = cadastroForm.getByTestId('submitButton');

    userEvent.type(rg, 'Rg');
    userEvent.type(orgaoExpeditor, 'orgaoExpeditor');
    userEvent.type(dtExpedicao, 'dtExpedicao');
    userEvent.click(tpSexo);
    userEvent.click(submitButton);

    jest.mock("react-datepicker", () => (props:any) => (
      <input
        data-testid="dtPicker"
        onChange={() => {
          console.log(props.onChange);
          props.onChange("test");
        }}
      />
    ));
  })
})