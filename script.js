function fibonacci(num) {
// your code here
	if(num === 1 || num===2)
	{
		return num-1;
	}
	let num1 = 0;
	let num2 = 1;
	for(let i=1;i<=num-2;i++)
		{
			num3 = num1 + num2;
			num1 = num2;
			num2 = num3;
		}
	return num2;
	
}

module.exports = fibonacci;
