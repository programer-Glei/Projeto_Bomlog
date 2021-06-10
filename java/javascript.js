

function selectImage(event) {
    const button = event.currentTarget
    console.log(button)
    //removar todas as classes .active
    const buttons = document.querySelectorAll(".op .op-item")
    console.log(buttons)
    buttons.forEach((button) => {
        button.classList.remove("active")
    })
    // selecionar a image clicada
    const image = button.children[0][0]
    console.log(image)
    const imageContainer = document.querySelector(".op-image img")
    console.log(imageContainer)

    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar a classe .active para este botão
    button.classList.add("active")
}
