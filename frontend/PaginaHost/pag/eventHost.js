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
    .then((data) =>{
        console.log(data)
        data.forEach(usuario =>{
            console.log(usuario)
    
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("id", usuario.id);
            authors.appendChild(card);
    
            const nome = document.createElement("h2");
            nome.textContent = usuario.nome
            card.appendChild(nome);
    
            const pergunta = document.createElement("p");
            pergunta.textContent = usuario.perguntas;
            card.appendChild(pergunta);
    
            const botao = document.createElement("button");
            botao.textContent = "✖";
            botao.setAttribute("data-id", usuario.id)
            card.appendChild(botao)
    
            botao.addEventListener("click", () => {
                const thisCard = botao.parentElement;            
                const cardPai = thisCard.parentElement;            
                fetch("http://localhost:3000/perguntas/:id", {
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
    .catch((erro) =>{
        console.log(erro)
    })