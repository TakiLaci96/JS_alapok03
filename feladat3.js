document.getElementById("gomb").addEventListener("click", () => {
    var ora = new Date().getHours(); 
    var koszontes;

    if (ora >= 5 && ora < 10) {
        koszontes = "Jó reggelt!";
    } else if (ora >= 10 && ora < 18) {
        koszontes = "Jó napot!";
    } else {
        koszontes = "Jó estét!";
    }
    alert(koszontes);
})


