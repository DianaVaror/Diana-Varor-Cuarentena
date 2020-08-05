/*=======================
De cuatro corredores de atletismo se sabe que C ha llegado
inmediatamente detras de B, y D ha llegado en medio de A y C.
Podria usted calcular el orden de llegada?

B -> 1
C -> 2
D -> 3
A -> 4
========================*/

//Primero creamos un objeto y las propiedades que seran
//los corredores, como no se en que posocion llegaron les asigno un valor 0

var a = {

	A:0,
	B:0,
	C:0,
	D:0,

//segundo hacemos dentro de una funcion el algoritmo condicional que nos hace el problema
//creamos un metodo con su funcion.

	resultado: function() {
		if (a.C > a.B &&
			a.D > a.B &&
			a.D > a.C &&
			a.D < a.A) 
		{
			return true;
		}

		return false;
	 
	},
//le pido que me retorne True o False con un intervalo de tiempo y que en ese mismo intervalo de tiempo
// me retorne en A,B.C.D un numero aleatorio de 0 al 4
intervalo: setInterval(function(){
//despues vamos a decirle que arroje los nuneros de cada posicion
         a.A = Math.ceil(Math.random()*4)
         a.B = Math.ceil(Math.random()*4)
         a.C = Math.ceil(Math.random()*4)
         a.D = Math.ceil(Math.random()*4)


//if(a.resultado() == true) lo puedo hacer asi o como esta abajo
//primero nombramos el objeto  a y despues el metodo
        if (a.resultado()) {
// si eso es verdadero voy a pedir que se borre el intervalo
         clearInterval(a.intervalo);
         console.log("atleta A", a.A)
         console.log("atleta B", a.B)
         console.log("atleta C", a.C)
         console.log("atleta D", a.D)


        }

    },10)

	
}