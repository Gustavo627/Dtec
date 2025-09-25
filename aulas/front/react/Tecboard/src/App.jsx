
import './App.css'

//function no React é Commponente
function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="">Qual é o nome do evento?</label>

        <input type="text" id="nome" placeholder="Sumer dev hits"></input>
      </fieldset>
    </form>
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
