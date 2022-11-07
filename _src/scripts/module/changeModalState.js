import checkNumForInput from "./checkNumForInput";

const changeModalState = (state) => {
    const balconyForm = document.querySelectorAll(".balcon_icons_img"),
        balconyWidth = document.querySelectorAll("#width"),
        balconyHeight = document.querySelectorAll("#height"),
        balconyType = document.querySelectorAll("#view_type"),
        balconyProfile = document.querySelectorAll(".popup_calc_profile .checkbox");

    checkNumForInput("#width");
    checkNumForInput("#height");

    function checkFilledInput(input) {

    }

    function bindActionToElements(elem, event, prop = null) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case "SPAN":
                        state[prop] = i
                        break;
                    case "INPUT":
                        if (item.getAttribute("type") === "checkbox") {
                            state[prop] = (i === 0) ? "cold" : "warm";
                            elem.forEach((box, j) => {
                                box.checked = (j === i);
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case "SELECT":
                        state[prop] = item.value
                        break;
                }
            })
        })
    }

    bindActionToElements(balconyForm, "click", "form");
    bindActionToElements(balconyWidth, "input", "width");
    bindActionToElements(balconyHeight, "input", "height");
    bindActionToElements(balconyType, "change", "type");
    bindActionToElements(balconyProfile, "change", "profile");

}

export default changeModalState;
