let button = document.getElementById("send_form");
var mensagem = document.querySelector('#email');

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("name").value;
    const nomeEvento = document.getElementById("event-name").value;
    let email = document.querySelector('#name');

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': nome,
            'event_name': nomeEvento,
            'email': email,
        })
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("message").textContent = "Você entrou na sala!!"
    })
    .catch((erro) => {
        console.log(erro)
    })
})

//receita(ingrediente1, ingrediente2, ingrediente3);