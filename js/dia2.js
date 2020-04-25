var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina;

opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

if (opcionUsuario == piedra) {
	alert("Elegiste Papel!");
}
else if (opcionUsuario == papel) {
	alert("Elegiste papel!");
}
else if (opcionUsuario == tijera) {
	alert("Elegiste tijera!");
}