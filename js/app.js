(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    const filterBox = document.querySelectorAll(".box");
    document.querySelectorAll(".list-catalog__item");
    document.querySelector(".list-catalog").addEventListener("click", (event => {
        if (event.target.tagName !== "LI") return false;
        let filterClass = event.target.dataset["f"];
        filterBox.forEach((element => {
            if (!element.classList.contains(filterClass)) element.classList.add("hide"); else {
                element.classList.remove("none");
                element.classList.remove("hide");
            }
        }));
    }));
})();