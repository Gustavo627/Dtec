import '../FormularioDeEvento/FormularioDeEvento.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { LabelDeFormulario } from "../LabelDeFormulario";
import { TituloDeFormulario } from "../TituloDeFormulario";

export function FormularioDeEvento() {
    return (
      <form className="form-evento">
        <TituloDeFormulario>
          Preencha para criar um evento.
        </TituloDeFormulario>
        <CampoDeFormulario>
          <LabelDeFormulario htmlFor="">Qual é o nome do evento?</LabelDeFormulario>
          <CampoDeEntrada type="text" id="nome" placeholder="Sumer dev hits"></CampoDeEntrada>
        </CampoDeFormulario>

      </form>
    )
  }
