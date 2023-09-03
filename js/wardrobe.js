const buttonWardrobe = document.getElementById("wardrobe-generate")
const type = document.querySelector(".wardrobe__title")
const newTable = document.getElementById("new-table")
const hidenTable = document.querySelector(".table")
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
    const hidenAletr = document.querySelectorAll(".wardrobe__form--alert")
    let tableAlert = [name, quantity, height, width, deep, plate]
    
    for (let i = 0; i < tableAlert.length; i++) {
    if(tableAlert[i] === "") {
        hidenAletr[i].textContent = "Wpisz poprawną wartość"
    }
    else if (tableAlert[i] < 0) {
        hidenAletr[i].textContent = "Wartość musi być liczbą większą od 0"
    }
    else {
        hidenAletr[i].textContent = ""

    let bok = {
        nazwa: name,
        rodzaj: `${type.textContent}-bok`,
        ilość: 2 * quantity,
        długość: height * 1,
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

    let szafaElements = szafa.map((value) => `
        <tr>
            <td>${value.nazwa}</td>
            <td>${value.rodzaj}</td>
            <td>${value.ilość}</td>
            <td>${value.długość}</td>
            <td>${value.okleinaDł}</td>
            <td>${value.szerokość}</td>
            <td>${value.okleinaSzer}</td>
            <td>${value.grubość}</td>
        </tr>`
        ).join(" ");

    newTable.innerHTML= szafaElements

    hidenTable.style.display = "none"
    if (hidenTable.style.display === "none") {
        hidenTable.style.display = "block"
    }

}}}

buttonWardrobe.addEventListener("click", wardrobe)

