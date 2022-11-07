const checkNumForInput = (selectorInput) => {
    const input = document.querySelectorAll(selectorInput)

    input.forEach(elem => {
        elem.addEventListener("input", () => {
            elem.value = elem.value.replace(/\D/, "");
        })
    })
}

export default checkNumForInput;