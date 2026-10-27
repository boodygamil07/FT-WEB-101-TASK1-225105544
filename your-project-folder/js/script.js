// Finds the button, listens for click, and toggles the 'dark' class on body
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});