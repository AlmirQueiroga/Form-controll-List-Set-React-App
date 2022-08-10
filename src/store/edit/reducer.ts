import * as actionTypes from "./type.d"

const initialState: actionTypes.EditarState = {
    editar: undefined
}

const reducer = (state: actionTypes.EditarState = initialState, action: actionTypes.EditarAction): actionTypes.EditarState => {
  console.log('asd')
  switch (action.type) {
    case actionTypes.ADD_OBJETO:
      console.log('olha aqui chegou', action.value)
      return { editar: action.value }
    case actionTypes.REMOVE_OBJETO:
      return { editar: undefined }
  }

  return state
}
  
  export default reducer