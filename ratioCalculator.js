function gcd(a, b)
{
	if(b === 0)
	{
		return a;
	}

	return gcd(b, a%b);
}

function calcRatio(a, b)
{
	if(isNaN(a) || isNaN(b) ||
		a === "" || b == "")
	{
		return [NaN, NaN];
	}

	let divisor = gcd(a, b);

	return [Math.floor(a/divisor), Math.floor(b/divisor)];
}

function displayRatio()
{
	let ratio = calcRatio(document.getElementById("ratioX").value, document.getElementById("ratioY").value);
	document.getElementById("ratioResult").innerHTML = ratio[0] + " : " + ratio[1];
}