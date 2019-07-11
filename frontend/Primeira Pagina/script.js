const button = document.getElementById("send_form");

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("name").value;
    const nomeEvento = document.getElementById("event-name").value;
    const email = document.getElementById("email").value;

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
        document.getElementById("message").textContent = "Sala Criada!!"
    })
    .catch((erro) => {
        console.log(erro)
    })
})
