const buttonWardrobe = document.getElementById("wardrobe-generate")
const type = document.querySelector(".wardrobe__title")
// let bok = {};
// let kranc = {};
// let cokół = {};
// let półka = {};
// let plecy = {};
// let front = {};
let szafa = [];


const wardrobe = () => {
    let name = document.getElementById("wardrobe-name").value;
    let quantity = document.getElementById("wardrobe-quantity").value;
    let height = document.getElementById("wardrobe-height").value;
    let width = document.getElementById("wardrobe-width").value;
    let deep = document.getElementById("wardrobe-deep").value;
    let plate = document.getElementById("wardrobe-plate").value;
    let plinth = document.getElementById("wardrobe-plinth").value;
    let shelfs = document.getElementById("wardrobe-shelfs").value;

    let bok = {
        nazwa: name,
        rodzaj: `${type.textContent}-bok`,
        ilość: 2 * quantity,
        długość: height,
        okleinaDł: 2,
        szerokość: deep,
        okleinaSzer: 2,
        grubość: plate
    }
    szafa.push(bok);

    let kranc = {
        nazwa: name,
        rodzaj: `${type.textContent}-kranc`,
        ilość: 2 * quantity,
        długość: width - 2 * plate,
        okleinaDł: 2,
        szerokość: deep,
        okleinaSzer: 0,
        grubość: plate
    }
    szafa.push(kranc);

    if (hidenCheck[0].checked) {
    let cokół = {
        nazwa: name,
        rodzaj: `${type.textContent}-cokół`,
        ilość: quantity,
        długość: width - 2 * plate,
        okleinaDł: 1,
        szerokość: plinth,
        okleinaSzer: 0,
        grubość: plate
        }
    szafa.push(cokół);
    }
    
    if (hidenCheck[1].checked) {
        let półka = {
            nazwa: name,
            rodzaj: `${type.textContent}-półka`,
            ilość: shelfs * quantity,
            długość:  width - 2 * plate,
            okleinaDł: 2,
            szerokość: deep - 10,
            okleinaSzer: 0,
            grubość: plate
        }
    szafa.push(półka);
    }

    if (hidenCheck[2].checked) {
        let plecy = {
            nazwa: name,
            rodzaj: `${type.textContent}-plecy`,
            ilość: quantity,
            długość: height - plinth - 6,
            okleinaDł: 0,
            szerokość: width - 6,
            okleinaSzer: 0,
            grubość: plate
        }
    szafa.push(plecy);
    }

    if (hidenCheck[3].checked) {
        let front = {
            nazwa: name,
            rodzaj: `${type.textContent}-front`,
            ilość: quantity,
            długość: height,
            okleinaDł: 2,
            szerokość: width,
            okleinaSzer: 2,
            grubość: plate
        }
    szafa.push(front);
    }
    
    console.log(szafa)
}

buttonWardrobe.addEventListener("click", wardrobe)

