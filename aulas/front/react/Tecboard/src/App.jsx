
import './App.css'
import { FormularioDeEvento } from "./assets/componentes/FormularioDeEvento";
import { Tema } from "./assets/Componentes/Tema"

//function no React e Componentes
function App()  {
const temas =[
    {
      id: 1,
      nome: a  
    }
]
}
function LabelDeFormulario ({children, htmlFor}) {
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
function TituloDeFormulario(props){
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
      <section>
      </section>
    </main>
  )
}

export default App
