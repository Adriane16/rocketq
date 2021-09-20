export default function Modal(){
    
    const modalWrapper = document.querySelector ('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        /*atribuir a classe active para a modal*/
        modalWrapper.classList.add("active")
    }
    function close(){
        /*remover a clase active da modal*/

        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}