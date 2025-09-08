//Referências a elementos HTML
const cidadeInput = document.getElementById("cidadeInput")
const buscarBtn = document.getElementById("buscarBtn")
const container = document.getElementById("container")

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        buscarBtn.click();
    }
})

//Adiciona um "ouvinte" ao evento clique do botão
buscarBtn.addEventListener('click',() => {
    const nomePais = cidadeInput.value.trim();
    if(nomePais === '') {
        alert("Digite o nome de um país.")
        return;
    }
    


    const url = `https://nominatim.openstreetmap.org${encodeURIComponent(pais)}&format=jsonv2`;

    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error("Local não encontrado.")
            }

            return response.json();
        })
        .then(data => {
            const cidade = data[0];

            const latitude = cidade.lat;
            const longitude = cidade.lon;

            container.innerHTML = `
                 <h2>${cidade.display_name}</h2>
                 <p><strong>Latitude:</strong> ${cidade.latitude}</p>
                 <p><strong>Longitude:</strong> ${cidade.longitude}</p>
                `
        })
        .catch(error => {
            console.log(error)
            container.innerHTML = `<p style="color": red;"> Erro: ${error.message}</p>`
        })
})

