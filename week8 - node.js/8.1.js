function automorphic(num){
	num2 = Math.pow(num,2)

	n1 = num.toString().length
	n2 = num2.toString().length

	if (num2.toString().slice(n2 - n1) == num.toString())
		console.log(num + ' is a Automorphic number\n');
	else
		console.log(num + ' is Not a Automorphic number\n');
}

module.exports.automorphic = automorphic;