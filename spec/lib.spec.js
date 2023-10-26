const lib = require("../lib");

describe("list.utils.node.lib", () => {
    it("has 2 functions", () => {
        const keys = Object.keys(lib);
        const actual = keys.length;
        const expected = 2;
        expect(actual).toEqual(expected);
        keys.forEach((k) => {
            expect(typeof lib[k]).toEqual("object");
        });
    });
    describe("select()", () => {
        it("returns an object containing three functions", () => {
            expect(Object.keys(lib.select).length).toEqual(3);
            const keys = Object.keys(lib.select);
            const expected = [ "from", "next", "take" ];
            expect(keys).toEqual(expected);
        });
        it("generates accurate values", () => {
            const expected = [ 1, 2, 4, 8, 16 ];
            const actual = [ ...lib.select.from(1).take(5).next((i) => (i % 2 === 0 ? 2 * i : i + 1)) ];
            expect(actual).toEqual(expected);
        });
        it("generates numbers from 0 to n", () => {
            const expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
            const actual = [ ...lib.select.from(0).take(10).next((i) => i + 1) ];
            // for (const curr of lib.select.from(0).take(10).next((i) => i + 1)) {
            //     actual.push(curr);
            // }
            expect(actual).toEqual(expected);
        });
        it("generates 2^n", () => {
            const expected = [ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ];
            const actual = [ ...lib.select.from(2).take(10).next((i) => 2 * i) ];
            // for (const curr of lib.select.from(2).take(10).next((i) => 2 * i)) {
            //     actual.push(curr);
            // }
            expect(actual).toEqual(expected);
        });
    });
});
