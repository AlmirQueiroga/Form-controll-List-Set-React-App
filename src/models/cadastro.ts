import OrgaoExpeditor from './orgaoexpeditor'

interface Cadastro {
    id?:number
    nrRg: string
    orgaoExpeditor?: OrgaoExpeditor
    dtExpedicao?: Date | string
    tpSexo?: number
}

export default Cadastro