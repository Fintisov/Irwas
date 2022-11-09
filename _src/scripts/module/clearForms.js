function clearCalcForm() {
    const allModal = document.querySelectorAll("[data-modal]");

    allModal.forEach(elem => {
        function clearForm(el) {
            el.childNodes.forEach(item => {
                if (item.nodeName !== "#text") {
                    if (item.nodeName === "INPUT" && item.getAttribute("type") !== "checkbox") {
                        item.value = "";
                    } else if (item.getAttribute("type") === "checkbox") {
                        item.checked = false;
                    } else if (item.nodeName === "SELECT") {
                        item.options[0].selected = true;
                    } else if (item.className === "balcon_icons") {
                        item.childNodes.forEach(child => {
                            if (child.nodeName !== "#text" && child.classList.contains("do_image_more")) {
                                child.classList.remove("do_image_more");
                            }
                        })
                        item.children[0].classList.add("do_image_more")
                    }
                }
                clearForm(item);
            })
        }

        clearForm(elem)
    })
}

export default clearCalcForm;