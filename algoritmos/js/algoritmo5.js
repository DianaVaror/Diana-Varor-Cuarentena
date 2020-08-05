/*===================

Si angela habla mas bajo que Rosa y Celia habla mas alto que Rosa, habla Angela mas alto o mas bajo que Celia?


Rosa mas alto que angela
Celia mas alto que Rosa
Celia:1
Rosa: 2
Angela: 3

=====================*/

var a = 
{
	Celia:0,
	Rosa:0,
	Angela:0,
	resultado: function()
	{
		if (
			a.Rosa > a.Angela &&
			a.Celia > a.Rosa &&
			a.Celia > a.Angela) 
		{
			return true;

		}

		return false;
	},


	intervalo: setInterval(function() 
	    {
	    	a.Rosa = Math.ceil(Math.random()*3)
	    	a.Celia = Math.ceil(Math.random()*3)
	    	a.Angela = Math.ceil(Math.random()*3)

		

		if (a.resultado())
		{

			clearInterval(a.intervalo);
			console.log("mujer Rosa", a.Rosa)
			console.log("mujer Celia", a.Celia)
			console.log("mujer Angela", a.Angela)
		}

	},1)
}


