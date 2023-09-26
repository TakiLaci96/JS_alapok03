//a 
var veletlenSzam = Math.ceil(Math.random() * 100);

//Változók létrehozása, bekérése HTML-ből
const tipp = document.getElementById("tipp");
const ellenorzes = document.getElementById("ellenorzes");

//b
function ell() {
    const tippeles = parseInt(tipp.value);

    if (veletlenSzam === tippeles) {
        uzenet.innerHTML = 'Eltaláltad!';
    } else if (veletlenSzam > tippeles) {
        uzenet.innerHTML = 'Nagyobb';
    } else {
        uzenet.innerHTML = 'Kisebb';
    }
};

ellenorzes.addEventListener('click', ell);

//c
ujSzam.addEventListener('click', () => {
    veletlenSzam = Math.ceil(Math.random() * 100);
    uzenet.innerHTML = '';
    tipp.value = '';
})


