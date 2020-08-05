var c, t, b;

function inicio() 
{
	//obtener elemento del DOM
	c = document.getElementById("caja");
    t = document.getElementById("usuario");
    b = document.getElementById("botoncito");

	b.addEventListener("click", calcular);

}


function calcular() 
{
		alert(t.value);
	 
}

//function NumeroRomano() {
	//var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	//var letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
	//var numero = (t.value);
	//if (numero>10 || x<=0)
	//{
		
	//}
	
