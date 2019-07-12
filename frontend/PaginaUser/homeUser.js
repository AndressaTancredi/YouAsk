const form = document.getElementById("event-form");
const nomeEvento = document.getElementById("event-name")

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    fetch('http://localhost:3000/salas')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        window.location.href=`pag/eventUser.html?name=${nomeEvento}`
    })
    .catch((erro) => {
        console.log(erro)
    })
})

/* fetch('http://localhost:3000/salas' {

    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'nome': nome,
        'nomeEvento': nomeEvento,
        'email': email,
    })
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    window.location.href=`pag/eventUser.html?name=${nomeEvento}`
})
.catch((erro) => {
    console.log(erro)
})
)
    const nome = document.getElementById("name").value;
    const nomeEvento = document.getElementById("event-name").value;
    const email = document.getElementById('email').value;

    console.log(nome,email,senha,nomeEvento); */