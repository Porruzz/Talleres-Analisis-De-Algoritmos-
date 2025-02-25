document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".container").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".container").style.transition = "opacity 1s";
        document.querySelector(".container").style.opacity = "1";
    }, 300);
});
