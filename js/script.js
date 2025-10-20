const container = document.querySelector(".container");

const cartas = [
    {name:"Valquíria", image: "img/card1.png", description: "Gira o machado, causando dano em área"},
    {name:"Mago de Fogo", image: "img/card2.png", description: "Lança bolas de fogo poderosas"},
    {name:"Arqueiro Mágico", image: "img/card3.png", description: "Soldado básico"},
    {name:"Lançador de Esqueletos", image: "img/card4.png", description: "Esqueleto em veículo, lança projéteis."},
    {name:"Princesa Arqueira", image: "img/card5.png", description: "Atira flechas de longo alcance."},
    {name:"Golem de Pedra", image: "img/card6.png", description: "Gigante lento e resistente"},
    {name:"Golem de Gelo", image: "img/card7.png", description: "Congela e retarda inimigos."},
    {name:"Demônio Furioso", image: "img/card8.png", description: "Criatura poderosa, cheia de raiva."},
    {name:"Fantasma da Lanterna", image: "img/card9.png", description: "Espírito que ilumina, talvez cure ou cause medo"},
    
];
const mostrarCartas = () =>{
    cartas.forEach(({name, image, description}) => {
    const card = document.createElement("div")
    card.className = 'card'

    const avatar = document.createElement("img")
    avatar.className = "card--avatar"
    avatar.src = image
    avatar.alt = name

    const title = document.createElement('h1')
    tittle.className = "card--title"
    title.textContent = name

})
}