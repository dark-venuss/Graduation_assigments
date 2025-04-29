function promeniGrad(){
    let select = document.getElementById("grad");
    let grad = select.value;
    let iframe = document.getElementById("frejm");
    iframe.src = "https://naslovi.net/vremenska-prognoza/" + grad;
    let opisUrl =  grad + ".html";
    window.open(
        opisUrl,
        "windowPopup",
        "width=600,height=600 left=100,top=100"
    );
}