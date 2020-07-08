var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");



var fondo = {
	url: "images/tile.png",
	cargaOK: false
}
var vaca = {
	url: "images/vaca.png",
	cargaOK : false

};

var cerdo = {
	url: "images/cerdo.png",
	cargaOK: false
}

var pollo = {
	url: "images/pollo.png",
	cargaOK: false
}

var cantidad = aleatorio(0, 50);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image ();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image ();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
	fondo.cargaOK = true;
	dibujar();
}


function cargarVacas ()
{
	vaca.cargaOK = true;
	dibujar();
}

function cargarCerdos()
{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarPollos ()
{
	pollo.cargaOK = true;
	dibujar();
}

function dibujar() {
	if (fondo.cargaOK == true) {
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if (vaca.cargaOK) {
		
		console.log(cantidad);
		for (var v = 0; v < cantidad; v++) 
		{
		var x = aleatorio(0, 5);
		var y = aleatorio(0, 5)
		var x = x * 80;
		var y = y * 80;
		papel.drawImage(vaca.imagen, x, y);
	
		}
		
	}
	if (cerdo.cargaOK) {
		papel.drawImage(cerdo.imagen, 50, 50);
	}
	if (pollo.cargaOK) {
		papel.drawImage(pollo.imagen, 200, 200);
	}
}
function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}
