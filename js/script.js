$(document).ready(function(){

for (var i = 1; i < 101; i++)
{

var value = function(number)
{

	if(number % (3*5) === 0)
{return "FizzBuzz";}

else if (number % 3 === 0)
{return "Fizz";}

else if (number % 5 === 0)
{return "Buzz";}

else { return number;}

};
$('body').append("<p></p>");
$('body').append(value(i));



};
});	