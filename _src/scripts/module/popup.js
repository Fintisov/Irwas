const modal = (
    trigger,
    close,
    modal,
    timerModal = null
) => {
    const triggerModal = document.querySelectorAll(trigger),
        closeModal = document.querySelector(`${modal} ${close}`),
        windowModal = document.querySelector(modal),
        body = document.querySelector("body");

    function showModal() {
        if (!windowModal.classList.contains("show")) {
            windowModal.classList.add("show");
            body.style.overflow = "hidden";
            clearTimeout(showModalByTime);
        }
    }

    function hiddenModal() {
        if (windowModal.classList.contains("show")) {
            windowModal.classList.remove("show");
            body.style.overflow = "";
        }
    }

    triggerModal.forEach(elem => {
        elem.addEventListener("click", (e) => {
            if (e.target) e.preventDefault();
            showModal();
        })
    });

    closeModal.addEventListener("click", () => {
        hiddenModal();
    });

    windowModal.addEventListener("click", (e) => {
        if (e.target === windowModal) {
            hiddenModal();
        }
    });

    let showModalByTime = (timerModal) ? setTimeout(showModal, timerModal) : null;
}

export default modal;