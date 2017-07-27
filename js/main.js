
(function() {
    var mobileNavBtn = document.getElementById("drop-down-btn");
    mobileNavBtn.addEventListener("click", function() {
        var navMenu = document.getElementById("nav-menu");
        if (navMenu.style.display !== "block") {
            navMenu.style.display = "block";
        } else {
            navMenu.style.display = "none";
        }
    });
})();
