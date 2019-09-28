import { Calculator } from "../src/calculator";

describe("When multiplying", () => {
	it("1 * 1 should be 1", () => {
		const calc = new Calculator();
		expect(calc.Multiply(1, 1)).toBe(1);
	});
	it("2 * 2 should be 4", () => {
		const calc = new Calculator();
		expect(calc.Multiply(2, 2)).toBe(4);
	});
	it("2 * 3 should be 6", () => {
		const calc = new Calculator();
		expect(calc.Multiply(2, 3)).toBe(6);
	});
	it("3 * 2 should be 6", () => {
		const calc = new Calculator();
		expect(calc.Multiply(3, 2)).toBe(6);
	});
});