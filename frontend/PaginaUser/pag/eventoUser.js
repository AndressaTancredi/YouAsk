let button = document.getElementById("send_form");

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    let nome = document.getElementById('name') 
    let pergunta = document.getElementById("pergunta");
    // Valores Inputs
    console.log(nome.value)
    let nomeUsuario = nome.value;
    let perguntaUsuario = pergunta.value;
    //Tabela de Perguntas
    var linha = document.createElement("tr");

    var colunaNome = document.createElement("td");
    colunaNome.textContent = nomeUsuario;
    linha.appendChild(colunaNome);

    var colunaPergunta = document.createElement("td");
    colunaPergunta.textContent = perguntaUsuario;
    linha.appendChild(colunaPergunta);

    var tabela = document.querySelector(".extrato__body")
    tabela.appendChild(linha)

    document.querySelector(".form").reset();

    const resp = {
        'name': nomeUsuario,
        'perguntas': perguntaUsuario
    }

    console.log(resp)

    fetch('http://localhost:3000/perguntas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        'name': nomeUsuario,
        'perguntas': perguntaUsuario
    })
    })
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
})