
// кнопки
var $NumbBtns = $('.calculator_buttons__numbs input');
var $operatorBtns = $('.calculator_buttons__operators input');
var $screen = $('.calculator_screen__content');
var myArr = [];
var sum;


var a,b,c;

$NumbBtns.click(function(e){
	// console.log(e.target);
	a = e.target.value;
	myArr.push(a);
	console.log(myArr);
});

$operatorBtns.click(function(e){
	// console.log(e.target);
	c = e.target.value;
	myArr.push(c);
	console.log(c);
	if(c === '='){
		 sum = myArr.join('');
		//  console.log(checkOper(sum));
		 $screen.text(checkOper(sum));
	}
});



function checkOper(str){
	let i = str.indexOf('+');
	let l = str.length;
	console.log(l);
	a = str.slice(0,i);
	b = str.slice(++i, --l);
	console.log(b);
	console.log(a);
	return((+a) + (+b));

}











// readInput($btnNumbs);

// function readInput($input) {
// 	let numbValue;
// 	$input.click(function (e) {
// 		//?получить цель события, обект на котором произошло событие
// 		numbValue = e.target.value;
// 		console.log(e.type);
// 		//? если это знак С, то удалить содержимое экрана
// 		if(numbValue === "c"){
// 			$screen.text('');
// 		}
// 		else
// 		$screen.append(numbValue);
// 	});
// 	return numbValue;
// }


















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