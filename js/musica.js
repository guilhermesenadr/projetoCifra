const titulo=document.getElementById("titulo")
const autor=document.querySelector("#cantor")
const trecho=document.querySelector("#trecho")
const btnNovaMusica=document.querySelector("#btnNovaMusica")
const container=document.querySelector(".container")


titulo.addEventListener("click", ()=>{
    autor.style.display="flex"
    trecho.style.display="flex"
})
autor.addEventListener("click", ()=>{
    autor.style.display="none"
})
trecho.addEventListener("click", ()=>{
    trecho.style.display="none"
})


const novaMusica=document.createElement("div")
const novoTitulo=document.createElement("div")
const novoTrecho=document.createElement("div")

const novaMusicaTitulo=document.createElement("h1")
novaMusicaTitulo.innerText="titulo"

const novaMusicaPara=document.createElement("p")
novaMusicaPara.innerText="Titulo da Musica"

const novoTituloTitulo=document.createElement("h1")
novoTituloTitulo.innerText="nome do cantor/autor"

const novoTituloPara=document.createElement("p")
novoTituloPara.innerText="cantor/autor"

btnNovaMusica.addEventListener("click", ()=>{
   novaMusica.setAttribute("id", "titulo")
   novoTitulo.setAttribute("id", "cantor")
   novoTrecho.setAttribute("id", "trecho")
   container.insertBefore(novaMusica, btnNovaMusica)
   container.appendChild(novoTitulo)
   container.appendChild(novoTrecho)
   novaMusica.appendChild(novaMusicaTitulo)
   novaMusica.appendChild(novaMusicaPara)
   novoTitulo.appendChild(novoTituloTitulo)
   novoTitulo.appendChild(novoTituloPara)
})
