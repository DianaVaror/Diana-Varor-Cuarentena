/*====================

Tenemos 4 perros: un galgo, un dogo, un alano y un podenco.Este ultimo come mas que el galgo: el alamo come mas que el galgo 
y menos que el dogo, pero este come mas que el podenco. Cual de los 4 perros come menos?

======================*/


var a =
{
	galgo:0,
	dogo:0,
	alano:0,
	podenco:0,
	resultado: function() 
	{
		if ( a.podenco > a.galgo &&
			a.alano > a.galgo &&
			a.dogo > a.alano &&
			a.dogo > a.podenco

			) {

			return true;
		}

		return false;
	
},

intervalo: setInterval(function() {


	a.galgo = Math.ceil(Math.random()*4);
	a.dogo = Math.ceil(Math.random()*4);
	a.alano = Math.ceil(Math.random()*4);
	a.podenco = Math.ceil(Math.random()*4);


	if (a.resultado()) {
		clearInterval(a.intervalo);
		console.log("Perro galgo", a.galgo);
		console.log("Perro Dogo", a.dogo);
		console.log("Perro alano", a.alano);
		console.log("Perro Podeno", a.podenco);

	}
},10)

}