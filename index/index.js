let openMenuBtn = document.getElementById("openMenuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");

let menu = document.querySelector(".menu")


setupMenu()


function setupMenu() {
    openMenuBtn.onclick = () => {
        menu.style.right = "0px"
    }
    closeMenuBtn.onclick = () => {
      menu.style.right = "-225px";
    };
}