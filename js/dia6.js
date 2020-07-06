var dibujo, lienzo, t, b;
function inicio() 
{
	//obtener elemento del DOM
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	dibujo = document.getElementById("dibujito");
	//contexto para poder dibujar
	lienzo = dibujo.getContext("2d");

	b.addEventListener("click", dibujarGrilla);


    //comenzar 
	lienzo.beginPath();
	//definir color
	lienzo.strokeStyle = "#00E";
	//dibujar circulo
	lienzo.arc(150,150,100, (Math.PI * 2), false);
	//rellenar circulo
	lienzo.fillStyle = "#00E";
	lienzo.fill();
	//terminar o cerrar
	lienzo.closePath();
	lienzo.stroke();

}

//Grilla Normal
function dibujarGrilla() {

	var l = lienzo;
	var rayas = Number(t.value);
	var ancho = 300, alto = 300;
	var linea, punto;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / anchoLinea;
	var limiteY= alto / anchoLinea;

	l.strokeStyle = "AAA";

	for(linea = 0; linea <= limiteX; linea++)
	{
		punto = (linea * anchoLinea) + 0.5;
		l.beginPath();
		l.strokeStyle = "AAA";
		l.moveTo(punto, 0.5);
		l.lineTo(punto, ancho-0.5);
		l.stroke();
		l.closePath();
	}

	for(linea = 0; linea <= limiteY; linea++)
	{
		punto = (linea * anchoLinea) + 0.5;
		l.beginPath();
		l.strokeStyle = "AAA";
		l.moveTo(0.5, punto);
		l.lineTo(alto - 0.5, punto);
		l.stroke();
		l.closePath();
	}
}