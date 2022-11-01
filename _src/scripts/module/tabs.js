const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const contentTabs = document.querySelectorAll(contentSelector);

    hiddenTabs();
    showTabs();

    function showTabs(i = 0) {
        contentTabs[i].classList.remove("hidden");
        contentTabs[i].classList.add("show");
        tabs[i].classList.add(activeClass);
    }

    function hiddenTabs() {
        contentTabs.forEach(el => {
            el.classList.add("hidden");
            el.classList.remove("show");
        })
    }

    header.addEventListener("click", (e) => {
        if (e.target && e.target.closest(tabsSelector)) {
            tabs.forEach((elem, i) => {
                elem.classList.remove(activeClass);
                if (e.target.closest(tabsSelector) === elem) {
                    hiddenTabs();
                    showTabs(i);
                }
            })
        }
    })
}

export default tabs;