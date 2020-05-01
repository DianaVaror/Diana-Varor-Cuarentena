function explosion() {
	alert("BOOM");
	document.write("<h1>BOOM! Elegiste un area minada :(</h1>");
	// body...
}
function ganaste() {
	document.write("<h1>Eres un ganador</h1>")

}

//1 = bomba 0= no bomba
var campo = [ [ 1, 0, 0 ],
              [ 0, 1, 0 ],
              [ 1, 1, 1 ] ];

if (campo[1][1] == 1)
{
	explosion();
}
else
{
	ganaste();
}