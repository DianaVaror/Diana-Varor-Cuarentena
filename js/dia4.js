document.addEventListener('keydown', function(evento){
	if(evento.keyCode == 32){
		console.log("salta");

		if (nivel.muerto == false)
		saltar();
	    else {
	    	nivel.velocidad = 9;
	    	nube.velocidad = 1;
	    	maggie.x = ancho + 100;
	    	nube.x = ancho + 100;
	    	nivel.marcador = 0;
	    	nivel.muerto = false;
	    }
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
	imgSuelo.src = 'images/suelo.png';
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

var suelo = 200;


var tgato = {y: suelo, vy:0, gravedad:2, salto:28, vymax:9, saltando: false};
var nivel = {velocidad: 9, marcador:0, muerto: false};
var maggie = {x: ancho + 100,y: suelo};
var nube = {x: 400, y:100, velocidad: 1};
var suelog  = {x:0, y:suelo + 30};

function dibujaGato() {
	ctx.drawImage(imgGato,0,0,456,336,100,tgato.y,60,60);
}

//.......................................................................

function dibujaMaggie(){
	ctx.drawImage(imgMaggie,0,0,201,251,maggie.x,maggie.y,60,60);

}

function logicaMaggie(){
	if (maggie.x < -100) {
		maggie.x = ancho + 100;
		nivel.marcador++;
	}
	else{
		maggie.x -= nivel.velocidad;
	}

}

//........................................................................


function dibujaSuelo(){
	ctx.drawImage(imgSuelo,suelog.x,0,700,180,0,suelog.y,700,35);
}



function logicaSuelo(){
	if (suelog.x > 700){
		suelog.x = 0;
	}
	else{
		suelog.x += nivel.velocidad;
	}
}


//........................................................................

function dibujaNube(){
	ctx.drawImage(imgNube,0,0,626,626,nube.x,nube.y,60,60);

}


function logicaNube(){
	if (nube.x < -100) {
		nube.x = ancho + 100;
	}
	else{
		nube.x -= nube.velocidad;
	}

}

//.........................................................................

function saltar(){

	tgato.saltando = true;
    tgato.vy = tgato.salto;

}


function gravedad() {
	if (tgato.saltando == true) {

		if (tgato.y - tgato.vy - tgato.gravedad > suelo) {
			tgato.saltando = false;
			tgato.vy = 0;
			tgato.y = suelo;
		}
		else{
			tgato.vy -= tgato.gravedad;
		    tgato.y -= tgato.vy;
		}
		
	}
}

function colision(){
	

	if (maggie.x >= 100 && maggie.x <= 150) {
		if (tgato.y >= suelo) {
			nivel.muerto = true;
			nivel.velocidad = 0;
			nube.velocidad = 0;
		}
	}

}

function puntuacion(){
	ctx.font = "30px impact";
	ctx.fillStyle = '#555555';
	ctx.fillText(`${nivel.marcador}`,600,50);

	if (nivel.muerto == true) {
		ctx.font = "60px impact";
		ctx.fillText(`GAME OVER`,240,150);
	}
}

//BUCLE PRINCIPAl
var FPS = 50;
setInterval(function(){
	if (typeof canvas !== 'undefined' ) {
		principal();
	}
},1000/FPS);


function principal() {
	borraCanvas();
	gravedad();
	colision();
	logicaSuelo();
	logicaMaggie();
	logicaNube();
	dibujaSuelo();
	dibujaMaggie();
	dibujaNube();
	dibujaGato();
	puntuacion();
}