function fact(n) {
	var a = 1;
	if (n == 1) return 1;
	else
		while (n > 0) {
			a *= (n--);
		}
	return a;
}

fact(5);




function rFact(n){
	if (n == 1) return 1;
	else return n * rFact(n - 1);
}

rFact(5);
