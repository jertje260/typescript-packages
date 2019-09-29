import { Add } from "../src";

describe("When adding", () => {
	it("1 + 1 should be 2", () => {
		expect(Add(1, 1)).toBe(2);
	});

	it("1 + 2 should be 3", () => {
		expect(Add(1, 2)).toBe(3);
	});

	it("2 + 1 should be 3", () => {
		expect(Add(2, 1)).toBe(3);
	});
	it("2 + 2 should be 4", () => {
		expect(Add(2, 2)).toBe(4);
	});
});