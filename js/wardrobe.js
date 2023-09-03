const buttonWardrobe = document.getElementById("wardrobe-generate");
const type = document.querySelector(".wardrobe__title");
const newTable = document.getElementById("new-table");
const hidenTable = document.querySelector(".table");
const drawingBox = document.getElementById("drawing-box")
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
    let tableAlert = [quantity, height, width, deep, plate]
    
    for (let i = 0; i < tableAlert.length; i++) {
        if(tableAlert[i] === "") {
            hidenAletr[i].textContent = "Wpisz poprawną wartość"
        }
        else if (tableAlert[i] < 0) {
            hidenAletr[i].textContent = "Wartość musi być liczbą większą od 0"
        }
        else {
            hidenAletr[i].textContent = ""
        }
    }

    if (quantity > 0 & height > 0 & width > 0 & deep > 0 & plate > 0) {
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

    let scale = 6;
    let div = document.createElement("div");
    drawingBox.append(div);

    div.style.height = `${height/scale}px`;
    div.style.width = `${plate/scale}px`;

    div = document.createElement("div");
    drawingBox.append(div);

    div.style.bottom = `${(height/scale)/2-(plate/scale/2)}px`;
    div.style.height = `${plate/scale}px`;
    div.style.width = `${(width-2*plate)/scale}px`;

    div = document.createElement("div");
    drawingBox.append(div);

    div.style.top = `${height/scale + 20-(plate/scale)}px`;
    div.style.height = `${plate/scale}px`;
    div.style.width = `${(width-2*plate)/scale}px`;
    div.style.position = "absolute"

    div = document.createElement("div");
    drawingBox.append(div);

    div.style.height = `${height/scale}px`;
    div.style.width = `${plate/scale}px`;



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

}}

buttonWardrobe.addEventListener("click", wardrobe)

