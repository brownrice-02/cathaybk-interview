function getUniqueNumber(items) {
	const uniqueNumbers = [];
	for (let i = 0; i < items.length; i++) {
		if (uniqueNumbers.indexOf(items[i]) === -1) {
			uniqueNumbers.push(items[i]);
		}
	}
	console.log(uniqueNumbers);
}

// Example
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
getUniqueNumber(items);