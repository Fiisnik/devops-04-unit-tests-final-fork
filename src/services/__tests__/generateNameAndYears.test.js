const generateNameAndYears = require("../generateNameAndYears");

describe('generateNameAndYears tests',() => {
    it('should failed as nothing is provided', () => {
        const result = generateNameAndYears('name','23');
        expect(result).toEqual(`name (23 years old)`)
    })

});