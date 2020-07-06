function Pokemon(n,t,d) {
	this.grito = "Pika Pika!";
	this.nombre = n;
	this.tipo = t;
	this.debilidad = d;
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

function inicio() {
	var pikachu = new Pokemon("Pikachi", "Electrico", "Tierra");
    pikachu.gritar();

    nombrePokemon.innerText = pikachu.nombre;
}
