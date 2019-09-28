import { Subtract } from "../src"

describe("When subtracting", () => {
	it("1 - 1 should be 0", () => {
		expect(Subtract(1, 1)).toBe(0);
	});

	it("2 - 1 should be 1", () => {
		expect(Subtract(2, 1)).toBe(1);
	});

	it("1 - 2 should be -1", () => {
		expect(Subtract(1, 2)).toBe(-1);
	});
});