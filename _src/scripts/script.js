import "./module/slider"
import modal from "./module/popup";
import tabs from "./module/tabs";
import sendForms from "./module/send-forms";
import changeModalState from "./module/changeModalState";

document.addEventListener("DOMContentLoaded", () => {
    const modalState = {
        form: 0,
        type: 'tree',
    };
    changeModalState(modalState);

    modal(".popup_engineer_btn", ".popup_engineer", ".popup_close");
    modal(".phone_link", ".popup", ".popup_close")

    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");

    tabs(".balcon_icons", ".balcon_icons_img", ".big_img img", "do_image_more", "show-inline");
    modal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");

    modal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false,);
    modal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false,);

    sendForms(modalState);
})
