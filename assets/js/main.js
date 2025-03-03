// Disallow right click
document.addEventListener("contextmenu", function (e) {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
        alert("Right-click is disabled on images.");
    }
});