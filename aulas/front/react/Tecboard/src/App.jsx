
import './App.css'
import { Banner } from './assets/componentes/Banner'
import { FormularioDeEvento } from "./assets/componentes/FormularioDeEvento";
import { Tema } from "./assets/componentes/Tema"
import { CardEvento }  from './assets/componentes/CardEvento';

//function no React e Componentes
function App() {
  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
  ]

  const eventos = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]


}
function LabelDeFormulario({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>

  )
}
function CampoDeFormulario({ children }) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}
//function no React e Componentes
function TituloDeFormulario(props) {
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

      <Banner />

      <FormularioDeEvento temas = {temas} />

      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <CardEvento evento={eventos[0]}/>
          </section>
        )
      })}
      <section>
      </section>
    </main>
  )
}

export default App
