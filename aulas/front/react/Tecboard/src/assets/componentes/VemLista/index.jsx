import '../VemLista/VemLista.css'

export function VemLista() {
    return (
        <select {...rest} defaultValue=""className='lista-suspensa-form'>
            <option disabled value=""> Selecione uma opção</option>
            {/* map() transforma um array em uma lista de elementos jsx únicos*/itens.map(function (item) {
                return (
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                )

            })}
        </select>
    )
}