import Modal from './modal.js'

const modal = Modal()

const modalTitle= document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal buttton')

/*pegar todos os botões que existem na check*/
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})

/*pegar quando o marcar como o lido for clicado*/


/*Qual o botão delete for clicado ele abre a modal*/

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML= `${text} essa pergunta?`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    
    
    
    
    modal.open() //abrir modal 
}