import { subString } from "../../src/utils/string";

describe("String", () => {
  describe("#Substring()", () => {
    const mockString = 'Helloworld';

    it("Should get all string if get full length", () => {
        const fullString = subString(0, mockString.length, mockString);

        expect(fullString).toEqual(mockString);
    });

    it("Should substring success with one character", () => {
        const sub = subString(0, 1, mockString);
        expect(sub).toEqual('H');
    });

    it("Should return string without error if correct input", () => {
        const sub = subString(0, 3, mockString);
        expect(sub).toBeString("string")
    });

    it("Should return empty string if not have string input", () => {
        const sub = subString(0, );
        expect(sub).toBeEmpty();
    });

  });
});
