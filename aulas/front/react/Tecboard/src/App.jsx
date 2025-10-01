
import './App.css'
import { FormularioDeEvento } from "./assets/componentes/FormularioDeEvento";

function Label ({children, htmlFor}) {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>

  )
}
function CampoDeFormulario({children}) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}
//function no React e Componentes
function TituloFormulario(props){
  return (
    <h2> {props.children} </h2>
  )
}

function App() {

  return (
    <main>
      <header>
        <img src='/logo.png' alt='logo' />
      </header>

      <section>
        <img src='/banner.png' alt='banner principal' />
      </section>
      <FormularioDeEvento></FormularioDeEvento>
    </main>
  )
}

export default App
