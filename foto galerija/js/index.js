let slika = document.querySelector("#slika");
let opis = document.querySelector("#opis");
let slicice = document.querySelectorAll(".slike img");

for(let i = 0; i < slicice.length; i++) {
    let slikovnica = slicice[i];
    slikovnica.addEventListener("click", function() {
        slika.src = slikovnica.src;
        opis.innerHTML = slikovnica.alt;
    });
}