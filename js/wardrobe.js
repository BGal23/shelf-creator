const socleCheck = document.getElementById("scoleCheck");
const scoleAdd = document.querySelector(".wardrobe__form--socle");


socleCheck.addEventListener("click", () => {
    if (socleCheck.checked === true) {
        scoleAdd.style.display = "block";
    }
    else {
        scoleAdd.style.display = "none"
    }
})
