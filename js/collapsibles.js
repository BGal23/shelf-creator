const buttonColl = document.querySelectorAll(".projects__label");
const hidenText = document.querySelectorAll(".projects__hiden")
const buttonText = document.querySelectorAll(".projects__button-text")


for (let i = 0; i < buttonColl.length; i++) {
    buttonColl[i].addEventListener("click", () =>{
        if (hidenText[i].style.display === "block") {
            hidenText[i].style.display = "none";
            buttonText[i].textContent = "Kliknij aby rozwinąć"
        }
        else {
            hidenText[i].style.display = "block";
            buttonText[i].textContent = "Kliknij aby zwinąć"
        }
    })
}