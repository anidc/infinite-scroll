const container = document.querySelector(".container")

const URL = 'https://dog.ceo/api/breeds/image/random'

function loadImages(numImages = 20) {
    let i = 0
    while (i < numImages) {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const img = document.createElement("img")
                img.src = `${data.message}`
                container.appendChild(img)
            })
        i++
    }
}

loadImages()
let debounceTimeout = null
window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        if (debounceTimeout !== null) {
            debounceTimeout = null
        }
        debounceTimeout = setTimeout(() => {
            loadImages()
        }, 1000);
    }
})