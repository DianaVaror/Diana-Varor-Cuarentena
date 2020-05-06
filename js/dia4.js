document.addEventListener('keydown', function(evento){
	if(evento.keyCode == 32){
		console.log("salta");
		saltar();
	}
});

var imgGato, imgNube, imgMaggie, imgSuelo;

function cargaImagenes(argument) {
	imgGato = new Image();
	imgNube = new Image();
	imgMaggie = new Image();
	imgSuelo = new Image();


	imgGato.src = 'images/gato.png';
	imgNube.src = 'images/nube.jpg';
	imgMaggie.src = 'images/maggie.png';
	imgSuelo.src = 'images/linea.png';
}

var ancho = 700;
var alto = 300;

var canvas,ctx;


function inicializa() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	cargaImagenes();
}

function borraCanvas() {
	canvas.width = ancho;
	canvas.height = alto;
}


var tgato = {y: 250, vy:0, gravedad:2, salto:28, vymax:9, saltando: false};

function dibujaGato() {
	ctx.drawImage(imgGato,0,0,456,336,100,tgato.y,60,60);
}

function saltar(){

}


function gravedad() {
	// body...
}

//BUCLE PRINCIPAl
var FPS = 10;
setInterval(function(){
	principal();
},1000/10);


function principal() {
	borraCanvas();
	gravedad();
	dibujaGato();
}