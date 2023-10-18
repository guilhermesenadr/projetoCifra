const caixa=document.querySelector("#caixa")
const titulo=document.querySelector("#titulo")
const cantor=document.querySelector("#cantor")
const trecho=document.querySelector("#trecho")
const nomeTitulo=document.querySelector("#texto_titulo")
const BtnNovo=document.querySelector("#btnNovaMusica")
const conteudo=document.querySelector("#conteudo")
const textoh3titulo=document.querySelector("nome_titulo")
const textoh3cantor=document.querySelector("texto_cantor")
const textoh3trecho=document.querySelector("texto_trecho")

let i=0
const novoCaixa=document.createElement("div")
novoCaixa.setAttribute("id", "caixa"+i)
novoCaixa.setAttribute("class", "elemusica")
    
const novoTitulo=document.createElement("div")
novoTitulo.setAttribute("id", "titulo")
novoTitulo.setAttribute("class", "containero")
const novoHTitulo=document.createElement("h1")
novoHTitulo.innerHTML="Titulo:"
const novoHnome=document.createElement("h3")
novoHnome.setAttribute("id","nome_titulo" )

const novoCantor=document.createElement("div")
novoCantor.setAttribute("id", "cantor")
novoCantor.setAttribute("class", "containero")
const novoHcantor=document.createElement("h1")
novoHTitulo.innerHTML="Titulo:"
const novoHnomecantor=document.createElement("h3")
novoHnomecantor.setAttribute("id","nome_cantor" )




BtnNovo.addEventListener("click", (ev)=>{
   const inputSelecionado=nomeTitulo
   const inputCantor=
   conteudo.insertBefore(novoCaixa,inputSelecionado)
   i=i++
   novoCaixa.appendChild(novoTitulo)
   novoTitulo.appendChild(novoHTitulo)
   novoTitulo.appendChild(novoHnome)
   novoHnome.innerHTML=inputSelecionado.value

})
