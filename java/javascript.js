

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
    const imagens = button.children[0]
    const url = imagens.children[0]
    console.log(url)
    const imageContainer = document.querySelector(".img-redonda img")
    console.log(imageContainer)

    //atualizar o container de image
    imageContainer.src = url.src

    //adicionar a classe .active para este botão
    button.classList.add("active")
}
