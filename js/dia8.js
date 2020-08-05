/*=============
escribe los numeros de 1 al 100, y escibre fizz en los numero divisibles
por 3, y escribe buzz en los numeros que sean divisibles opor 5, y fizzbuzz
en los numero divisible por ambos.
un numero divisible es alquel en el cual su residuo da cero o no tiene numeros 
decimales.
mod(modulo) se saca con %, el modulo me sirve para saber cuando sobra un nmero

=================*/

var numeros = 100;
var divisible = false;

for (var i = 1; i <= 100; i++)
{
	
	if (esDivisible(i,3)) 
	{
		document.write("Fizz");
	
	}

	if (esDivisible(i,5))
	{
		document.write("Buzz");
	

	}
	if(!esDivisible(i,3) && !esDivisible(i,5))
	{
		document.write(i);
	}
	document.write("<br />")
	
}

function esDivisible(num, divisor)
{
	if(num % divisor == 0)
	{
		return true;

	}
	else 
	{
		return false;
	}
	
}