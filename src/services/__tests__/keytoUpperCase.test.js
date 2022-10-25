const KeytoUpperCase = require("../KeytoUpperCase");

describe('generateNameAndYears tests',() => {

    const items = [ { titles: 'test'}, { title: 'testNUmberTwo'}];

    it('should success', () => {
        const result = KeytoUpperCase(items,'23')
        expect(result).toEqual(`name (23 years old)`)
    })

});