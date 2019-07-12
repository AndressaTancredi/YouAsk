//Me da um obj que descreve a url
const urlParams = new URLSearchParams(window.location.search);
const nomeDoEvento = urlParams.get('name');

//fecht pro banco perguntando o nome da sala, e popula com o get de perguntas

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

//Preciso analisar minha api e demonstar no fornt o que eu quero demonstrar no get: uma tabela de perguntas sendo feitas pelos users

fetch(`http://localhost:3000/salas/${nomeDoEvento}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // document.getElementById("message").textContent = "Pergunta Enviada!!"
    })
    .catch((erro) => {
        console.log(erro)
})