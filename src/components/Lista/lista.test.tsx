import React from 'react';
import {render, screen} from '@testing-library/react';
import Lista from './Lista';

describe('teste de exibição da lista',() => {
  it('matchsnapshot', () => {

    render(<Lista onEdit={()=>{}}/>)

      const rg = screen.getByTestId('rg')
      const ogEmissor = screen.getByTestId('ogEmissor')
      const dtExpedicao = screen.getByTestId('dtExpedicao')
      const sx = screen.getByTestId('sx')
      const opcoes = screen.getByTestId('opcoes')

      expect(rg.textContent).toBe('RG')
      expect(ogEmissor.textContent).toBe('Orgão Emissor')
      expect(dtExpedicao.textContent).toBe('Data de Expedição')
      expect(sx.textContent).toBe('Sexo')
      expect(opcoes.textContent).toBe('Opções')
  })

})
