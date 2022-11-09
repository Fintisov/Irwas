import checkNumForInput from "./checkNumForInput";
import {closeAllModal} from "./popup";
import clearCalcForm from "./clearForms";

const sendForms = (state) => {
    const forms = document.querySelectorAll("form");

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

    const clearObj = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === "object") {
                clearObj(obj[key]);
            } else {
                if (key === "form") {
                    obj[key] = 0;
                } else if (key === "type") {
                    obj[key] = "tree";
                } else {
                    obj[key] = "";
                }
            }
        }
    }

    checkNumForInput("input[name='user_phone']");

    forms.forEach(el => {
        el.addEventListener("submit", async (e) => {
                e.preventDefault();
                const formData = new FormData(el);

                for (let key in state) {
                    formData.append(key, state[key]);
                }

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
                        clearObj(state);
                        clearCalcForm();
                        setTimeout(() => {
                            closeAllModal();
                        }, 1000)
                        setTimeout(() => {
                            createStatusMessage.remove();
                        }, 5000)
                    })
            }
        )
    })
}

export default sendForms;