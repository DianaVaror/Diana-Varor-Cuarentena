
//Primero creamos funciones
function explosion()
{
    alert("BOOM!!");
    document.write("<h1>BOOM! Elegiste un area minada :(</h1>");
}
function ganaste()
{
    document.write("Eres un ganador :)");    
}

//1 = Bomba. 0 = No hay bomba
//segundo declaramos el campo de batalla con una matriz
var campo = [ [ 1 , 0 , 0 ] ,
              [ 0 , 1 , 0 ] ,
              [ 1 , 0 , 1 ] ];
// creamos otro array donde cesped=0 y bombra=1
var textos = ["Cesped", "Bomba"];

//tercero declaramos variables para obtener datos de usuario
var x, y;

alert("Estás en un campo minado\n" +
      "Elije una posición entre el 0 y el 2 para X y para Y");
x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");

//ciclo
if(x <= 2 && y <= 2)
{
    var posicion = campo[x][y];
    document.write("Elegiste " + textos[posicion] + "<br />");
    if(posicion == 1)
    {
        explosion();
    }
    else
    {
        ganaste();
    }
}
else
{
    document.write("¡Te saliste del campo!");
    explosion();
}
