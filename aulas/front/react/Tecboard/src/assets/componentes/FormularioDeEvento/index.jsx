import '../FormularioDeEvento/FormularioDeEvento.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { LabelDeFormulario } from "../LabelDeFormulario";
import { TituloDeFormulario } from "../TituloDeFormulario";
import { VemLista } from "../VemLista";
import { Botao } from "../BotaoDeFormulario"

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloDeFormulario>
        Preencha para criar um evento.
      </TituloDeFormulario>

      <div className='campos'>
        <CampoDeFormulario>
          <LabelDeFormulario htmlFor="">Qual é o nome do evento?</LabelDeFormulario>
          <CampoDeEntrada type="text" id="nome" placeholder="Sumer dev hits"></CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <LabelDeFormulario htmlFor="">Qual é a data do evento?</LabelDeFormulario>
          <CampoDeEntrada type="date" id="nome" placeholder='data do evento'></CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <LabelDeFormulario htmlFor="">Qual é o nome do evento?</LabelDeFormulario>

          <VemLista/> {/*Lista Suspensa*/}
        </CampoDeFormulario>

      </div>

      <div className='acoes'>
        <Botao>
          Criar evento
        </Botao>
      </div>
    </form>
  )
}
