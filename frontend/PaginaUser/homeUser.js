const form = document.getElementById("event-form");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let nomeEvento = document.getElementById("event-name").value;
    fetch('http://localhost:8080/salas')

    .then((response) => {
        console.log(response);
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