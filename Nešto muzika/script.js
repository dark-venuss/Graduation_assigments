function gitara(audio){
    zvuk= document.getElementById(audio);
    zvuk.play;
}


// napraviti funkciju koja će moći da se iskoristi za bilo koji instrument u index.html fajlu
function openPopup(url){
    window.open(
        url,
        "windowPopup",
        "width=400, height=300, top=400, left=600"
    );
}
openPopup('gitara');
openPopup('violina');
openPopup('klavir');
openPopup('bubnjevi');
openPopup('harmonika');
openPopup('kontrafagot');