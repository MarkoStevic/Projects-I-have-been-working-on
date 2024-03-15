export const Loader = () => {
    const loader = document.createElement("div")
    loader.classList.add("loader")

    for (let i = 1; i <= 5; i++) {
        const divDot = document.createElement("div")
        divDot.classList.add("dot")
        loader.appendChild(divDot)
        if (i == 1) continue
        divDot.classList.add(`d${i}`)
    }

    return loader
}