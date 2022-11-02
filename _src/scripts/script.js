import "./module/slider"
import modal from "./module/popup";
import tabs from "./module/tabs";
import sendForms from "./module/send-forms";

document.addEventListener("DOMContentLoaded", () => {
    modal(".popup_engineer_btn", ".popup_close", ".popup_engineer");

    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");

    sendForms();
})
