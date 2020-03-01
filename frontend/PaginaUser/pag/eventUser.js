//Me da um obj que descreve a url
const urlParams = new URLSearchParams(window.location.search);
const nomeDoEvento = urlParams.get('name');
let salaName

//Fetch que pega a sala criada no banco:
fetch(`http://localhost:3000/salas/${nomeDoEvento}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        salaName = data.nomeEvento
    })
    .catch((erro) => {
        console.log(erro)
})

//Fetch que cria lista de perguntas
let button = document.getElementById("send_form");

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    let nome = document.getElementById('nome').value;
    let pergunta = document.getElementById("perguntas").value;

    console.log(typeof(nome,pergunta));
    
    document.querySelector(".form-group-event-user").reset();

    fetch(`http://localhost:3000/salas/adicionarperguntas/${salaName}`,  {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nome,
            'perguntas': pergunta,
        })  
    }) 
    .then((response) => {
        console.log(nome,pergunta);
        console.log(response)
    })
    .then((data) => {
        console.log(data);
    })
    .catch((erro) => {
        console.log(erro)
    })
})