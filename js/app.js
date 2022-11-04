// MENU RESPONSIVE
let abrirMenu = document.getElementById("abrirMenu"),
    cerrarMenu = document.getElementById("cerrarMenu"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

abrirMenu.addEventListener("click", function () {
        menuResponsive.classList.add("active")
    });

cerrarMenu.addEventListener("click", function () {
    menuResponsive.classList.remove("active")
});

enlaces.addEventListener("click", function () {
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
})



//SLIDER
let contenedor = document.querySelector(".slider"),
    btnIzquierdo = document.getElementById("btn-izquierdo"),
    btnDerecho = document.getElementById("btn-derecho");

    btnIzquierdo.addEventListener("click", function () {
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });

    btnDerecho.addEventListener("click", function () {
        contenedor.scrollLeft += contenedor.offsetWidth;
    });



//FORMULARIO
let = formulario = document.getElementById("formulario");

    function validar(e) {
        let inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inpputComent = document.getElementById("comentario"),
            alertError = document.getElementById("alertError"),
            alertSuccess = document.getElementById("alertSuccess");


        if(inputNombre.value == 0 || inputEmail.value == 0 || inpputComent.value == 0) {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function () {
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            }, 2000);

        } else{
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");

            setTimeout(function () {
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");
            }, 2000);

            inputNombre.value = "";
            inputEmail.value = "";
            inpputComent.value = "";
        }
    }

formulario.addEventListener("submit", validar);


// BOTON SCROLL TOP
var btnTop = document.getElementById("btn-top")

// EVENTO SCROLL EN LA PAGINA
window.addEventListener("scroll", function(){
    var scroll = document.documentElement.scrollTop,
        fullSize = document.documentElement.offsetHeight,
        sizeVP = document.documentElement.clientHeight;

    if (scroll > 100) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }

    // MODIFICAR ELEMENTO A FINAL DE PAGINA
    if (fullSize == (scroll + sizeVP)) {
        btnTop.classList.add("scrollFinal");
    } else {
        btnTop.classList.remove("scrollFinal");
    }

});

// EVENTO CLICK EN BOTON
btnTop.addEventListener("click", function () {
    window.scrollTo(0,0);
});

// EVENTO CLICK EN LOGO
logo.addEventListener("click", function () {
    window.scrollTo(0,0);
});