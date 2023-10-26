const { from, next, take } = require("../select");

describe("select()", () => {
    it("from take next", () => {
        const actual = [ ...from(0).take(10).next((i) => i + 1) ];
        const expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        expect(actual).toEqual(expected);
    });

    it("take next from", () => {
        const actual = [ ...take(10).next((i) => i + 1).from(0) ];
        const expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        expect(actual).toEqual(expected);
    });

    it("next from take", () => {
        const actual = [ ...next((i) => i + 1).from(0).take(10) ];
        const expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        expect(actual).toEqual(expected);
    });
});
