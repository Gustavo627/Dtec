import './cardevento.css'

export function CardEvento(evento) {
    return (
        <div className='card-evento'>
            <img src={evento.capa} alt={evento.titulo} />

            <div className='corpo'>
                <p className='tag'>
                    {evento.tema.nome}
                </p>
                <p className='data'>
                    {evento.data.toLocaleDateString('pt-br')}
                </p>{/*pega a data atual no local padrão: pt-br*/}
                <h4 className='titulo'>
                    {evento.titulo}
                </h4>

            </div>

        </div>
    )
}