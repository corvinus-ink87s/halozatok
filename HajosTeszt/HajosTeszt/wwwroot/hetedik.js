
window.onload = function () {
    letöltés();
    var ID = 1;

    window.onload = function () {
        kérdésBetöltés(ID);
    }
    var kérdések;
    var kérdésSzáma;
    var helyesVálasz;

    function letöltés() {
        fetch('/questions.json')
            .then(response => response.json())
            .then(data => letöltésBefejeződött(data));

        function letöltésBefejeződött(d) {
            console.log("Sikeres letöltés!")
            console.log(d)
            kérdések = d;
            kérdésMegjelenítés(1);
            kérdésSzáma = 1;
        }

      

        function letöltésBefejeződött(d) {
            console.log("Sikeres letöltés!")
            console.log(d)
            kérdések = d;
            kérdésMegjelenítésRégi(1);
            kérdésSzáma = 1;
        }
    }

    function kérdésBetöltés(id) {
        fetch(`/questions/${id}`)
            .then(response => {
                if (!response.ok) {
                    console.error('Hibás válasz: ${response.status}')
                }
                else {
                    return response.json()
                }

            })
            .then(data => kérdésMegjelenítésÚj(data));
    }

    function kérdésMegjelenítésÚj(kérdés) {
        console.log(kérdés);
        document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
        document.getElementById("válasz1").innerText = kérdés.answer1;
        document.getElementById("válasz2").innerText = kérdés.answer2;
        document.getElementById("válasz3").innerText = kérdés.answer3;
        document.getElementById("kép").innerHTML = `<img id="kép1" src="https://szoft1.comeback.hu/hajo/${kérdés.image}">`;
        helyesVálasz = kérdés.correctAnswer;
    }

    function VisszaÚj() {
        ID = ID - 1;
        kérdésBetöltés(ID);
        színezésOff();
    }

    function ElőreÚj() {
        ID = ID + 1;
        kérdésBetöltés(ID);

        színezésOff();
    }

    function Válasz1Új() {
        document.getElementById("válasz1").style.backgroundColor = "red";
        document.getElementById(`válasz${helyesVálasz}`).style.backgroundColor = "green";
    }

    function Válasz2Új() {
        document.getElementById("válasz2").style.backgroundColor = "red";
        document.getElementById(`válasz${helyesVálasz}`).style.backgroundColor = "green";
    }

    function Válasz3Új() {
        document.getElementById("válasz3").style.backgroundColor = "red";
        document.getElementById(`válasz${helyesVálasz}`).style.backgroundColor = "green";
    }

    function kérdésMegjelenítés(kérdés) {
        function kérdésMegjelenítésRégi(kérdés) {
            document.getElementById("kérdés_szöveg").innerHTML = `<h2>${kérdések[kérdés].questionText}`;
            document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
            document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
        }
    }