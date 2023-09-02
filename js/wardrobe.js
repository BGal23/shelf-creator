const buttonWardrobe = document.getElementById("wardrobe-generate")
let bok = {};
// let kranc = {};
// let pułka = {};
// let cokół = {};
// let plecy = {};

const wardrobe = () => {
    let height = document.getElementById("wardrobe-height").value;
    let width = document.getElementById("wardrobe-width").value;
    let deep = document.getElementById("wardrobe-deep").value;
    let plate = document.getElementById("wardrobe-plate").value;
    let plinth = document.getElementById("wardrobe-plinth").value;
    let shelfs = document.getElementById("wardrobe-shelfs").value;

    bok.ilość = 2;
    bok.długość = {
        wymiar: height,
        okleina: 2
    };
    bok.szerokość = {
        wymiar: width,
        okleina: 0
    };
    bok.grubość = plate;

    console.log(bok)
}

buttonWardrobe.addEventListener("click", wardrobe)