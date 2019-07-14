const urlParams1 = new URLSearchParams(window.location.search);
const nomeDoEvento = urlParams1.get('name');

//Fetch que pega a sala criada no banco:
fetch(`http://localhost:3000/salas/${nomeDoEvento}`)
    .then((response) => {
        return response.json();
    })
    .then((sala) => {
        // Fetch que dá um get nas perguntas:
        const authors = document.querySelector('.authors');

        sala.perguntas.forEach(pergunta =>{

            let card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("id", pergunta._id);
            authors.appendChild(card);

            const nome = document.createElement("h2");
            nome.textContent = pergunta.nome
            card.appendChild(nome);

            const perguntaParagraph = document.createElement("p");
            perguntaParagraph.textContent = pergunta.perguntas;
            card.appendChild(perguntaParagraph);

            const botao = document.createElement("button");
            botao.textContent = "✖";
            botao.setAttribute("data-id", pergunta._id)
            card.appendChild(botao)

            botao.addEventListener("click", () => {
                const thisCard = botao.parentElement;            
                const cardPai = thisCard.parentElement;            
                fetch("https://reqres.in/api/users", {
                method: 'DELETE',
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "id": botao.getAttribute("data-id")
                })
                })
                .then(() =>{
                    cardPai.removeChild(thisCard)
                })
                .catch((erro) =>{
                    console.log(erro)
                })
            })
        })
    })
    .catch((erro) => {
        console.log(erro)
    })
    // fetch(`http://localhost:3000/perguntas/${pergunta._id}

    /* fetch(`http://localhost:3000/deletaperguntas/${sala._id}/${pergunta._id}`, {
        method: 'PATCH',
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": botao.getAttribute("data-id")
        })
    })
    .then(() =>{
        cardPai.removeChild(thisCard)
    })
    .catch((erro) =>{
        console.log(erro)
    })
})
})
})
.catch((erro) => {
console.log(erro)
})
// fetch(`http://localhost:3000/perguntas/${pergunta._id} */