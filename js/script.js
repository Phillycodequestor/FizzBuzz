$(document).ready(function(){


var x = prompt("Enter an integer greater than zero.");

//convert string to integer
var integer = parseInt(x);

//check if decimal
if (integer % 1 != 0) {

	alert("Please enter a whole number");
}

else if (integer < 1) {
	alert("Please enter a number greater than zero.");
}

else {

//determine if fizz, etc.
var value = function(number) 
{

if(number % (3*5) === 0)
	{return "FizzBuzz";}

else if (number % 3 === 0)
	{return "Fizz";}

else if (number % 5 === 0)
	{return "Buzz";}

else 
	{ return number;}
};

//call the function
for(var i = 1; i <= integer; i++)

{
$('body').append("<p></p>");
$('body').append(value(i));
};

};

});	