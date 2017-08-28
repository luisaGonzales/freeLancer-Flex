// /*
//  * Archivo principal de JS
//  */
//Funcionalidades para cambio de estilo del menú
// Traemos las secciones

var sectionPortafolio = document.getElementById("portafolio");
var links = document.getElementsByClassName("link");

var titleChange = document.getElementById("project");
window.onscroll = function () {
    var valueScroll = window.pageYOffset;
    console.log(valueScroll);
    if(valueScroll > 100){
       titleChange.classList.add("titleChange");
    } else if (valueScroll < 100) {
        titleChange.classList.remove("titleChange");
        titleChange.classList.add("titleChange1");
    }
    if ((valueScroll > 650) && (valueScroll < 1600)){
        links[0].classList.add("change");
    } else {
        links[0].classList.remove("change");
    }
    if ((valueScroll >= 1600) && (valueScroll < 2300)){
        links[1].classList.add("change");
    } else {
        links[1].classList.remove("change");
    }
    if (valueScroll >= 2300){
        links[2].classList.add("change");
    } else {
        links[2].classList.remove("change");
    }
}

// Funcionalidad de imagenes de portafolio
// Obtenemos las imagenes 
var imgPortafolio = document.getElementsByClassName("imgPortafolio");
// Traemos la sección
for (var i = 0; i < imgPortafolio.length; i++) {
    imgPortafolio[i].onmouseenter = function () {
        change(this);
    }
    imgPortafolio[i].onmouseleave = function () {
        backNormal(this);
    }
    imgPortafolio[i].onclick = function () {
        info(this);
    }
}

function change(event) {
    var divLupa = document.createElement("div");
    divLupa.setAttribute("id", "divLupa");
    divLupa.classList.add("divLupaBg");
    var iconLupa = document.createElement("i");
    iconLupa.classList.add("fa");
    iconLupa.classList.add("fa-search-plus");
    iconLupa.classList.add("fa-5x");
    iconLupa.classList.add("search");
    iconLupa.classList.add("col-4");
    divLupa.appendChild(iconLupa);
    event.appendChild(divLupa);
}

function backNormal(event) {
    event.removeChild(document.getElementById("divLupa"));
}

function info(event) {
    //Obtenemo la ruta para poder mostrar la imagen
    var ruta = event.id;
    //Creamos el Div Completo 
    var divBig = document.createElement("div");
    divBig.classList.add("divBig");
    divBig.classList.add("col-12");
    divBig.setAttribute("id", "divBig");
    //Creamos el título
    var projectTitle = document.createElement("h2");
    var projectTitleTxt = document.createTextNode("Project Title");
    projectTitle.appendChild(projectTitleTxt);
    projectTitle.classList.add("text-uppercase");
    projectTitle.classList.add("mb-0");
    projectTitle.classList.add("mt-0");
    projectTitle.classList.add("text-project-title");
    //Creamos las líneas
    var spanLine = document.createElement("div");
    var line = document.createElement("hr");
    line.classList.add("line");
    line.classList.add("line-dark");
    var star = document.createElement("i");
    star.classList.add("fa");
    star.classList.add("fa-star");
    star.classList.add("fa-2x");
    star.classList.add("iconStar-dark");
    var line2 = document.createElement("hr");
    line2.classList.add("line");
    line2.classList.add("line-dark");
    spanLine.appendChild(line);
    spanLine.appendChild(star);
    spanLine.appendChild(line2);
    // Creamos la imagen
    var imgBig = document.createElement("img");
    imgBig.src = "assets/images/portfolio/" + ruta + ".png";
    imgBig.classList.add("imgZoom");
    //Creamos el botón de cerrar
    var iconClose = document.createElement("i");
    iconClose.classList.add("fa");
    iconClose.classList.add("fa-times");
    iconClose.classList.add("fa-lg");
    iconClose.classList.add("closeInfo");
    iconClose.onclick = function () {
        removeSearch();
    }
    //Creamos el texto 
    var infoTxt = document.createElement("div");
    infoTxt.classList.add("infoTxt");
    var spanTxt = document.createElement("span");
    var spanTxtTxt = document.createTextNode("Use this area of the page to describe your porject. The icon above is part of a free icon set by ");
    spanTxt.appendChild(spanTxtTxt);
    var flatIcons = document.createElement("a");
    var flatIconsTxt = document.createTextNode("Flat Icons");
    flatIcons.classList.add("infoLink");
    flatIcons.appendChild(flatIconsTxt);
    spanTxt.appendChild(flatIcons);
    var spanTxt2 = document.createElement("span");
    var spanTxtTxt2 = document.createTextNode(". On their website, you can download their free set with the icons, or you can purchase the entire set with 146 icons for only $12!");
    spanTxt2.appendChild(spanTxtTxt2);
    infoTxt.appendChild(spanTxt);
    infoTxt.appendChild(flatIcons);
    infoTxt.appendChild(spanTxt2);
    //Creamos los links 
    var divInfo = document.createElement("div");
    divInfo.classList.add("divInfo");
    var spanClient = document.createElement("span");
    var spanClientTxt = document.createTextNode("Client: ");
    spanClient.appendChild(spanClientTxt);
    spanClient.classList.add("spanInfo");
    var client = document.createElement("a");
    var clientTxt = document.createTextNode("Start Bootstrap");
    client.classList.add("infoLink")
    client.appendChild(clientTxt);
    spanClient.appendChild(client);

    var spanDate = document.createElement("span");
    var spanDateTxt = document.createTextNode("Date: ");
    spanDate.appendChild(spanDateTxt);
    spanDate.classList.add("spanInfo");
    var date = document.createElement("a");
    var dateTxt = document.createTextNode("April 2014");
    date.classList.add("infoLink")
    date.appendChild(dateTxt);
    spanDate.appendChild(date);

    var spanService = document.createElement("span");
    var spanServiceTxt = document.createTextNode("Service: ");
    spanService.appendChild(spanServiceTxt);
    spanService.classList.add("spanInfo");
    var service = document.createElement("a");
    var serviceTxt = document.createTextNode("Web Development");
    service.classList.add("infoLink")
    service.appendChild(serviceTxt);
    spanService.appendChild(service);

    divInfo.appendChild(spanClient);
    divInfo.appendChild(spanDate);
    divInfo.appendChild(spanService);

    //Creamos el boton para cerrar 
    var btnClose = document.createElement("div");
    btnClose.classList.add("btnClose");
    var spanBtnClose = document.createElement("span");
    var iconClose2 = document.createElement("i");
    iconClose2.classList.add("fa");
    iconClose2.classList.add("fa-times");
    iconClose2.classList.add("fa-lg");
    iconClose2.classList.add("btnCloseInfo");
    spanBtnClose.appendChild(iconClose2);
    btnClose.appendChild(spanBtnClose);
    var btnCloseTxt = document.createTextNode(" Close");
    btnClose.appendChild(btnCloseTxt);
    btnClose.onclick = function () {
        removeSearch();
    }

    //Anidamos
    divBig.appendChild(projectTitle);
    divBig.appendChild(iconClose);
    divBig.appendChild(spanLine);
    divBig.appendChild(imgBig);
    divBig.appendChild(infoTxt);
    divBig.appendChild(divInfo);
    divBig.appendChild(btnClose);
    sectionPortafolio.appendChild(divBig);
}

function removeSearch() {
    sectionPortafolio.removeChild(document.getElementById("divBig"));
}

var inputName = document.getElementById("name");
inputName.oninvalid = function () {
    inputName.setAttribute("placeholder", "*Please enter your name");
}
var inputEmail = document.getElementById("email");
inputEmail.oninvalid = function () {
    inputEmail.setAttribute("placeholder", "*Please enter your email");
}
var inputNumber = document.getElementById("number");
inputNumber.oninvalid = function () {
    inputNumber.setAttribute("placeholder", "*Please enter your number");
}
var inputMessage = document.getElementById("message");
inputMessage.oninvalid = function () {
    inputMessage.setAttribute("placeholder", "*Please enter a message");
}

