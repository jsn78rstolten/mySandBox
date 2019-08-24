// бинарный поиск,
//  входные данные масив и число для поиска

function binarSearch(arr, item) {
	var low = 0;
	var max = arr.length - 1;
	var guess;



	while (low <= max) {
		var mid = Math.floor((low + max) / 2);
		guess = arr[mid];

		if (guess === item) {
			return mid;
		} else if (guess < item) {
			low = mid + 1;
		} else if (guess > item) {
			max = mid - 1;
		} else
			return -1;

	}

}