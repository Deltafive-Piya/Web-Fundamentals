/* 
    Given an array and an item to search for,
    return the index where the item is found,

    return -1 to represent not found
*/

// R.I.O.T.

const arrA1 = ["a", "b", "c"];
const searchItemA1 = "c";
const expectedA1 = 2;

const arrA2 = ["a", "b", "c"];
const searchItemA2 = 5;
const expectedA2 = -1;

const arrA3 = ["c", "a", "b", "c"];
const searchItemA3 = "c";
const expectedA3 = 0;

const arrA4 = [];
const searchItemA4 = 5;
const expectedA4 = -1;

//* choose your ALGO ROLES
// DRIVER 🚗   
// PRESENTER 👨‍🏫
// NAVIGATOR 🧭

/*
👉 spend 10 mins writing the pseudocode only!



*/

function indexOf(items, searchItem) {
	// loops throught the length of array 1 starting at 0 and adding 1 each time
	for (var i = 0; i < items.length; i++) {
		//code will exec only if search item is found; return index at which the element was found.
		if (items[i] === searchItem) {
			return i;
		}
		//if the PREVIOUS return doesnt catch, execute this block at the end
		if (i === items.length - 1) {
			return -1;
		}
	}
}

// Tests
const resultA1 = indexOf(arrA1, searchItemA1);
console.log(resultA1, "should be", expectedA1);

const resultA2 = indexOf(arrA2, searchItemA2);
console.log(resultA2, "should be", expectedA2);

const resultA3 = indexOf(arrA3, searchItemA3);
console.log(resultA3, "should be", expectedA3);

const resultA4 = indexOf(arrA4, searchItemA4);
console.log(resultA4, "should be", expectedA4);
