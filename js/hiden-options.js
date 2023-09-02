const hidenCheck = document.querySelectorAll(".wardrobe__form--checkbox");
const hidenAdd = document.querySelectorAll(".wardrobe__form--hiden");

for (let i = 0; i < hidenAdd.length; i++) {
    hidenCheck[i].addEventListener("click", () => {
    if (hidenCheck[i].checked === true) {
        hidenAdd[i].style.display = "block";
    }
    else {
        hidenAdd[i].style.display = "none"
    }
})
}