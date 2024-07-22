import { subString, removeSpecialCharacter } from "../../src/utils/string";

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

  describe('#removeSpecialCharacter()', () => {
    it('Should remove special characters success', () => {
      const mockString = '!@#^*&^(*!#$/.;Helloworld()*)_)+_)(*(_-=+)*';
      const stringReplace = removeSpecialCharacter(mockString);
      expect(stringReplace).toEqual('Helloworld');
    });


    it('Should return empty string if input is null', () => {
      const mockString = null;
      const stringReplace = removeSpecialCharacter(mockString);
      expect(stringReplace).toBeEmpty();
    });


    it('Should return empty string if input is undefined', () => {
      const mockString = undefined;
      const stringReplace = removeSpecialCharacter(mockString);
      expect(stringReplace).toBeEmpty();
    });
  })
});
