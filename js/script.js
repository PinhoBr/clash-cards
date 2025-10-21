const container = document.querySelector(".container");

const cartas = [
    {name:"Valquíria", image: "img/card1.png", description: "Gira o machado, causando dano em área", raridade: "rara"},
    // ÉPICA
    {name:"Mago de Fogo", image: "img/card2.png", description: "Lança bolas de fogo poderosas", raridade: "epica"},
    // COMUM
    {name:"Arqueiro Mágico", image: "img/card3.png", description: "Soldado básico", raridade: "comum"},
    // LENDÁRIA
    {name:"Lançador de Esqueletos", image: "img/card4.png", description: "Esqueleto em veículo, lança projéteis.", raridade: "lendaria"},
    // RARA
    {name:"Princesa Arqueira", image: "img/card5.png", description: "Atira flechas de longo alcance.", raridade: "rara"},
    // COMUM
    {name:"Golem de Pedra", image: "img/card6.png", description: "Gigante lento e resistente", raridade: "comum"},
    // ÉPICA
    {name:"Golem de Gelo", image: "img/card7.png", description: "Congela e retarda inimigos.", raridade: "epica"},
    // LENDÁRIA
    {name:"Demônio Furioso", image: "img/card8.png", description: "Criatura poderosa, cheia de raiva.", raridade: "lendaria"},
    // ÉPICA
    {name:"Fantasma da Lanterna", image: "img/card9.png", description: "Espírito que ilumina, talvez cure ou cause medo", raridade: "epica"},
];
const mostrarCartas = () =>{
    cartas.forEach(({name, image, description, raridade}) => {
    const card = document.createElement("div")
    card.className = 'card'
    card.className = `card raridade--${raridade}`

    const avatar = document.createElement("img")
    avatar.className = "card--avatar"
    avatar.src = image
    avatar.alt = name

    const title = document.createElement("title")
    title.className = "card--title"
    title.textContent = name

    const desc = document.createElement("p")
    desc.className = "card--discription"
    desc.textContent= description

    card.appendChild(avatar)
    card.appendChild(title)
    card.appendChild(desc)

    container.appendChild(card)

})
}
document.addEventListener("DOMContentLoaded", mostrarCartas)