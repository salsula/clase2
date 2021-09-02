var dondeEstas;

if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}

var laHora = new Date().getHours();

var elSaludo;

if (5 < laHora && laHora < 12) {
    elSaludo = "Buenos días. ";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Buenas tardes. ";
} else {
    elSaludo = "Buenas noches. ";
}

var elEncabezado = document.querySelector("header");

var loPrincipal = document.querySelector("main");

var lorenIpsum = ["pan con huevo","pan con palta","pan con chancho","pan con mantequilla","pan con manjar"];

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "portada").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan("Estás en index.html").parent("title");
    createElement('p','Me gusta el '+random(lorenIpsum)+'.').parent(loPrincipal);
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#555");
}

function pagina() {
    createSpan("Estás en page.html").parent("title");
    createElement('p','Me gusta el '+random(lorenIpsum)+'.').parent(loPrincipal);
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#555");
}
