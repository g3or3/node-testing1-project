function trimProperties(obj) {
	const copy = {};
	for (const prop in obj) copy[prop] = obj[prop].trim();

	return copy;
}

function trimPropertiesMutation(obj) {
	for (const prop in obj) obj[prop] = obj[prop].trim();

	return obj;
}

function findLargestInteger(integers, retVal = integers[0].integer) {
	if (!integers.length) return retVal;

	integers.shift();
	const firstElem = integers[0]?.integer;
	retVal = firstElem > retVal ? firstElem : retVal;

	return findLargestInteger(integers, retVal);
}

class Counter {
	constructor(initialNumber) {
		this.count = initialNumber;
	}

	countDown() {
		if (this.count < 0) this.count = 0;

		return this.count--;
	}
}

class Seasons {
	constructor() {
		this.seasons = ["summer", "fall", "winter", "spring"];
		this.curSeasonIdx = 0;
	}

	next() {
		this.curSeasonIdx = this.curSeasonIdx > 3 ? 0 : this.curSeasonIdx;
		return this.seasons[this.curSeasonIdx++];
	}
}

class Car {
	constructor(name, tankSize, mpg) {
		this.name = name;
		this.odometer = 0; // car initilizes with zero miles
		this.currTank = tankSize; // car initiazes full of gas
		this.tankSize = tankSize;
		this.mpg = mpg;
	}

	drive(distance) {
		if (this.currTank === 0) {
			return this.odometer;
		} else if (this.currTank - distance / this.mpg >= 0) {
			this.currTank -= distance / this.mpg;
			this.odometer += distance;
		} else {
			let difference =
				Math.abs(this.currTank - distance / this.milesPerGallon) * this.milesPerGallon;
			this.currTank = 0;
			this.odometer += distance - difference;
		}

		return this.odometer;
	}

	refuel(gallons) {
		const tankAfterRefuel = gallons + this.currTank;

		this.currTank = tankAfterRefuel >= this.tankSize ? this.tankSize : tankAfterRefuel;

		return this.currTank * this.mpg;
	}
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(_number) {
	// ✨ implement
}

module.exports = {
	trimProperties,
	trimPropertiesMutation,
	findLargestInteger,
	isEvenNumberAsync,
	Counter,
	Seasons,
	Car,
};
