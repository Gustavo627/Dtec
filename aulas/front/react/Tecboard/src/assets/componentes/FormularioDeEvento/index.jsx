import '../FormularioDeEvento/FormularioDeEvento.css'
import { CampoDeFormulario } from "module";

export function FormularioDeEvento() {
    return (
      <form className="form-evento">
        <TituloFormulario>
          Preencha para criar um evento.
        </TituloFormulario>
        <CampoDeFormulario>

          <Label htmlFor="">Qual é o nome do evento?</Label>
  
          <input type="text" id="nome" placeholder="Sumer dev hits"></input>
        </CampoDeFormulario>

      </form>
    )
  }