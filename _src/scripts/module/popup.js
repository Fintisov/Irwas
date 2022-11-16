const modal = (trigger,
               modal,
               close,
               closeClickOverlay = true,
               timerModal = "",
) => {
    const triggerModal = document.querySelectorAll(trigger),
        closeModal = document.querySelector(`${modal} ${close}`),
        windowModal = document.querySelector(modal),
        body = document.querySelector("body");

    function getWidthScrollBar () {
        let div = document.createElement("div"),
            result = null;
        div.style.cssText = `
          width: 50px;
          height: 50px;
          overflow-y: scroll;
          visibility: hidden;
        `;

        body.append(div);

        result = div.offsetWidth - div.clientWidth;
        div.remove();

        return result;
    }

    function showModal() {
        closeAllModal();
        if (!windowModal.classList.contains("show")) {
            windowModal.classList.add("show");
            body.style.overflow = "hidden";
            clearTimeout(showModalByTime);
        }

        body.style.marginRight = `${getWidthScrollBar()}px`;
    }

    function hiddenModal() {
        closeAllModal();
        if (windowModal.classList.contains("show")) {
            windowModal.classList.remove("show");
        }
        body.style.cssText = `
            overflow: "";
            margin-right: ""; 
        `;
    }


    triggerModal.forEach(elem => {
        elem.addEventListener("click", (e) => {
            if (e.target) {
                e.preventDefault();
                showModal();
            }
        })
    });

    closeModal.addEventListener("click", () => {
        closeAllModal();
        hiddenModal();
    });

    windowModal.addEventListener("click", (e) => {
        if (e.target === windowModal && closeClickOverlay) {
            closeAllModal();
            hiddenModal();
        }
    });

    let showModalByTime = (timerModal) ? setTimeout(showModal, timerModal) : "";
}

function closeAllModal() {
    const allModal = document.querySelectorAll("[data-modal]");

    allModal.forEach(elem => {
        if (elem.classList.contains("show")) {
            elem.classList.remove("show");
        }
    })
}


export default modal;
export {closeAllModal};