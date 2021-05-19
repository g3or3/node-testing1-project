const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
	let input, expected, actual;
	beforeEach(() => {
		input = { foo: "  foo ", bar: "bar ", baz: " baz" };
		expected = { foo: "foo", bar: "bar", baz: "baz" };
		actual = utils.trimProperties(input);
	});
	test("[1] returns an object with the properties trimmed", () => {
		expect(actual).toEqual(expected);
	});
	test("[2] returns a copy, leaving the original object intact", () => {
		expect(actual).not.toBe(input);
	});
});

describe("[Exercise 2] trimPropertiesMutation", () => {
	let input, expected, actual;
	beforeEach(() => {
		input = { foo: "  foo ", bar: "bar ", baz: " baz" };
		expected = { foo: "foo", bar: "bar", baz: "baz" };
		actual = utils.trimPropertiesMutation(input);
	});
	test("[3] returns an object with the properties trimmed", () => {
		expect(actual).toEqual(expected);
	});
	test("[4] the object returned is the exact same one we passed in", () => {
		expect(actual).toBe(input);
	});
});

describe("[Exercise 3] findLargestInteger", () => {
	test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
		const input = [
			{ integer: 12 },
			{ integer: 4300 },
			{ integer: 60000 },
			{ integer: 8400 },
			{ integer: 234 },
		];
		const expected = 60000;
		const actual = utils.findLargestInteger(input);
		expect(actual).toBe(expected);
	});
});

describe("[Exercise 4] Counter", () => {
	let counter;
	beforeEach(() => {
		counter = new utils.Counter(3); // each test must start with a fresh couter
	});
	test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
		expect(counter.countDown()).toBe(3);
	});
	test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
		expect(counter.countDown()).toBe(3);
		expect(counter.countDown()).toBe(2);
	});
	test("[8] the count eventually reaches zero but does not go below zero", () => {
		let retVal;
		for (let i = 3; i !== -5; i--) {
			retVal = counter.countDown();
			if (i >= 0) expect(retVal).toBe(i);
			else expect(retVal).toBe(0);
		}
	});
});

describe("[Exercise 5] Seasons", () => {
	let seasons;
	const seasonsInOrder = ["summer", "fall", "winter", "spring"];
	beforeEach(() => {
		seasons = new utils.Seasons(); // each test must start with fresh seasons
	});
	test('[9] the FIRST call of seasons.next returns "summer"', () => {
		expect(seasons.next()).toBe("summer");
	});
	test('[10] the SECOND call of seasons.next returns "fall"', () => {
		for (let i = 0; i < 1; i++) {
			expect(seasons.next()).toBe(seasonsInOrder[i]);
		}
	});
	test('[11] the THIRD call of seasons.next returns "winter"', () => {
		for (let i = 0; i < 2; i++) {
			expect(seasons.next()).toBe(seasonsInOrder[i]);
		}
	});
	test('[12] the FOURTH call of seasons.next returns "spring"', () => {
		for (let i = 0; i < 3; i++) {
			expect(seasons.next()).toBe(seasonsInOrder[i]);
		}
	});
	test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
		for (let i = 0; i < 4; i++) {
			expect(seasons.next()).toBe(seasonsInOrder[i]);
		}
	});
	test('[14] the 40th call of seasons.next returns "spring"', () => {
		for (let i = 0; i < 39; i++) {
			expect(seasons.next()).toBe(seasonsInOrder[i % 4]);
		}
	});
});

describe("[Exercise 6] Car", () => {
	let focus;
	beforeEach(() => {
		focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
	});
	test("[15] driving the car returns the updated odometer", () => {
		expect(focus.drive(10)).toBe(10);
	});
	test("[16] driving the car uses gas", () => {
		expect(focus.currTank).toBe(20);
		focus.drive(300);
		expect(focus.currTank).toBe(10);
	});
	test("[17] refueling allows to keep driving", () => {
		expect(focus.currTank).toBe(20);
		focus.drive(600);
		expect(focus.currTank).toBe(0);
		expect(focus.odometer).toBe(600);
		focus.drive(100);
		expect(focus.odometer).toBe(600);
		focus.refuel(20);
		expect(focus.currTank).toBe(20);
		focus.drive(600);
		expect(focus.odometer).toBe(1200);
	});
	test("[18] adding fuel to a full tank has no effect", () => {
		expect(focus.currTank).toBe(20);
		focus.refuel(10);
		expect(focus.currTank).toBe(20);
	});
});

describe("[Exercise 7] isEvenNumberAsync", () => {
	test.todo("[19] resolves true if passed an even number");
	test.todo("[20] resolves false if passed an odd number");
	test.todo(
		'[21] rejects an error with the message "number must be a number" if passed a non-number type'
	);
	test.todo(
		'[22] rejects an error with the message "number must be a number" if passed NaN'
	);
});
