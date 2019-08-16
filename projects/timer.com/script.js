var $NumbBtns = $('.calculator_buttons__numbs input');
var $operatorBtns = $('.calculator_buttons__operators');
var $screen = $('.calculator_screen__content');
var $clear = $('#clear');
var $total = $('.calculator_buttons__operators-total');

var outputNumbs;
var outputOper;
var myArr = [];

$NumbBtns.click(function (e) {
	console.log(e.target.value);
	outputNumbs = e.target.value;
	if (outputNumbs !== 'c') {
		$screen.append(outputNumbs);
		myArr.push(outputNumbs);
		console.log(myArr);
	}
});

$operatorBtns.click(function (e) {
	outputOper = e.target.value;
	$screen.append(outputOper);
	myArr.push('_');
	myArr.unshift(outputOper);
});

$clear.click(function (e) {
	$screen.text('');
	myArr = [];
});

$total.click(function () {
	check(myArr);
});

// принимает массив
// ищит в нем занчения
function check(arr1) {
	let oper = arr1[0]; // первый элемент в масиве всегда оператор
	let end = arr1.indexOf('_', 1); // ищет первое число(левое значение)
	let a = arr1.slice(1, end); // записать в переменную левое значение
	let b = arr1.slice(++end, arr1.length); // записать в переменную правое зн
	a = a.join('');
	b = b.join('');
	console.log(a);
	console.log(b);
	$screen.text(calc(a, b, oper));
}

// принимает 3 аргумента левое значение, правое и оператор
// возвращает результат выражения
function calc(n1, n2, operator) {
	let result;
	switch (operator) {
		case '+':
			result = ((+n1) + (+n2));
			break;
		case '-':
			result = ((+n1) - (+n2));
			break;
		case 'x':
			result = ((+n1) * (+n2));
			break;
		case '/':
			result = ((+n1) / (+n2));
			break;
	}
	myArr = ['0'];
	return result;
}


// ---------------------------------------------------------------------------------







































// var myArr = [];
// var sum;
// var output;


// var a, b, c;

// $clear.click(function () {
// 	$screen.text('');
// 	myArr = [];
// });
// // Числа
// $NumbBtns.click(function (e) {
// 	let a = e.target.value;
// 	//  если на входе есть данные то дабавь их на экран и не равны С
// 	if ((a) && (a !== 'c')) {
// 		$screen.append(a);
// 		myArr.push(a);
// 		firstNumb.push(a);
// 	}
// });

// // Операторы
// $operatorBtns.click(function (e) {
// 	c = e.target.value;
// 	//  если на входе есть данные то дабавь их на экран
// 	if (c) {
// 		$screen.append(c);
// 		myArr.push(c);
// 	}
// 	if (c === '=') {
// 		sum = myArr.join('');
// 		$screen.text(check(sum));
// 	}
// });


// function check(str) {
// 	console.log(str);
// 	if (str.indexOf('+') == 1) {
// 		console.log('plus');
// 		let i = str.indexOf('+');
// 		let l = str.length;
// 		a = str.slice(0, i);
// 		b = str.slice(++i, --l);
// 		return ((+a) + (+b));
// 	} else if (str.indexOf('-') == 1) {
// 		console.log('minus');
// 		let i = str.indexOf('-');
// 		let l = str.length;
// 		a = str.slice(0, i);
// 		b = str.slice(++i, --l);
// 		return ((+a) - (+b));
// 	} else if (str.indexOf('x') == 1) {
// 		let i = str.indexOf('x');
// 		let l = str.length;
// 		a = str.slice(0, i);
// 		b = str.slice(++i, --l);
// 		console.log('mlt');
// 		return ((+a) * (+b));
// 	} else if (str.indexOf('/') == 1) {

// 	}
// }

function checkOper(str1) {

}




























//  "use strict";
// var $test = $('#time');


// function second(s) {
// 	var time = new Date();
// 	var seconds = time.getSeconds();
// 	var minutes = time.getMinutes();
// 	var hours = time.getHours();
// 	window.setTimeout("second($test)", 1000);
// 	s.text(hours + ":" + minutes + ":" + seconds);

// }



// function pow(x, n) {
// 	let y = x;
// 	while (n > 1) {
// 		y *= x;
// 		n--;
// 	}
// 	return y;
// }

// console.log(pow(3, 3));

// var z = function mlt(a, b) {
// 	return a * b;
// };

// var myObj = {
// 	p: function pow(x, n) {
// 		let y = x;
// 		while (n > 1) {
// 			y *= x;
// 			n--;
// 		}
// 		return y;
// 	},
// 	sum: function sum1(a, b) {
// 		return a + b;
// 	},
// 	minus: function min(a, b) {
// 		return a - b;
// 	},
// 	ost: function ostatok(a, b) {
// 		return a % b;
// 	}
// };

// console.log(myObj.p(3, 6));
// console.log(myObj.sum(3, 6));
// console.log(myObj.minus(3, 6));
// console.log(myObj.ost(6, 4));