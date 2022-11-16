const images = () => {
    const imagesContainer = document.querySelector(".works"),
        popupImages = document.createElement("div"),
        img = document.createElement("img"),
        body = document.querySelector("body");

    imagesContainer.append(popupImages);
    popupImages.append(img);

    popupImages.classList.add("popup", "display-none");
    popupImages.style.cssText = `
        position: fixed;
        justify-content: center;
        align-items: center; 
        padding: 30px;
    `;
    img.style.cssText = `
        width: 80%;   
        height: 80%;
        max-width: 600px;
        max-height: 600px;
        object-fit: cover;
    `;


    imagesContainer.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains("preview")) {
            popupImages.classList.remove("display-none");
            popupImages.classList.add("show-flex");
            body.style.overflow = "hidden";

            if (target.closest("a[href]")) {
                const imgLink = target.closest("a[href]").getAttribute("href");
                img.setAttribute("src", imgLink);
                img.setAttribute("alt", "work");
            }
        }

        if (target && target.classList.contains("popup") && popupImages.classList.contains("show-flex")) {
            popupImages.classList.add("display-none");
            popupImages.classList.remove("show-flex");
            body.style.overflow = "";
        }
    })

}

export default images;