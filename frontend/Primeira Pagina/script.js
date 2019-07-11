const button = document.getElementById("send_form");

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    
    const nome = document.getElementById("name").value;
    const nomeEvento = document.getElementById("event-name").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log(nome,email,senha, nomeEvento);
    
    fetch('http://localhost:3000/salas', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nome,
            'nomeEvento': nomeEvento,
            'email': email,
            'senha': senha,
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("message").textContent = "Sala Criada!!"
    })
    .catch((erro) => {
        console.log(erro)
    })
})
