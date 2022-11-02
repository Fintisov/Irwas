const sendForms = () => {
    const forms = document.querySelectorAll("form"),
        inputsPhone = document.querySelectorAll("input[name='user_phone']");


    const statusForm = {
        load: "Отправка....",
        success: "Мы с Вами скоро свяжемся. ;-)",
        failure: "Что-то пошло не так. :-(",
    }

    const postData = async (url, data) => {
        let response = await fetch(url, {
            method: "POST",
            body: data
        });

        return await response.text();
    }

    const clearForms = () => {
        forms.forEach(elem => {
            elem.reset();
        })
    }

    inputsPhone.forEach(elem => {
        elem.addEventListener("input", () => {
            elem.value = elem.value.replace(/\D/, "");
        })
    })

    forms.forEach(el => {
        el.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = new FormData(el);

            const createStatusMessage = document.createElement("div");
            createStatusMessage.classList.add("status");
            el.appendChild(createStatusMessage);
            createStatusMessage.textContent = statusForm.load;

            postData("./assets/server.php", formData)
                .then(res => {
                    console.log(res)
                    createStatusMessage.textContent = statusForm.success;
                })
                .catch((e) => {
                    createStatusMessage.textContent = statusForm.failure;
                })
                .finally(() => {
                    clearForms();
                    setTimeout(() => {
                        createStatusMessage.remove();
                    }, 5000)
                })
        })
    })
}

export default sendForms;