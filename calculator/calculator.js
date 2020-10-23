function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;	
}

function sum (ary) {
	let sum = 0;
	if (ary.length != 0) {
		for (i = 0; i < ary.length; i++) {
			sum += ary[i];
		}
	}
	return sum;
	
}

function multiply (ary) {
	let multiply = 1;
	for (i = 0; i < ary.length; i++) {
		multiply *= ary[i];
	}
	return multiply;
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	let factorial = a
	if (a === 0) {
		return 1;
	} else {
		for(i = 1; i < a;i++) {
			factorial *= i;
		}
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}