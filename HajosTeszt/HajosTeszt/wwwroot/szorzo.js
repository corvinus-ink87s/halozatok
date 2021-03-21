window.onload = () => {

    let hova = document.getElementById("ide")
    hova.innerHTML = ""


    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        hova.appendChild(sor)
        sor.classList.add("egymas_melle")

        for (var o = 0; o < 10; o++) {
            let szam = document.createElement("div");
            sor.appendChild(szam)
            szam.innerText = (s + 1) * (o + 1)
            szam.classList.add("doboz")
            szam.style.color = 'rgb(${ 255 / 10 * s},0,${ 255 / 10 * o})'
        }
    }
}