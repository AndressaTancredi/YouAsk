//Me da um obj que descreve a url
const urlParams = new URLSearchParams(window.location.search);
const nomeDoEvento = urlParams.get('name');

//Fetch que pega a sala criada no banco:
fetch(`http://localhost:3000/salas/${nomeDoEvento}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((erro) => {
        console.log(erro)
})

// Fetch que dá um get nas perguntas:

const authors = document.querySelector('.authors');

fetch('http://localhost:3000/perguntas')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((erro) => {
        console.log(erro)
})



//Tabela de Perguntas
/* var linha = document.createElement("tr");

var colunaNome = document.createElement("td");
colunaNome.textContent = nomeUsuario;
linha.appendChild(colunaNome);

var colunaPergunta = document.createElement("td");
colunaPergunta.textContent = perguntaUsuario;
linha.appendChild(colunaPergunta);

var tabela = document.querySelector(".extrato__body")
tabela.appendChild(linha)

document.querySelector(".form").reset(); */