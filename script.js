var numbers = [1, 2, 3, 4, 5, 6, 7];

function sum(n)
{
	var sumation = 0;
	// sumatiom
	sumation = n.reduce( function (0,n) { return (0+n);});
	return sumation;
}
console.log(sum(numbers));
