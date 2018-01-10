const { makeSQLDate, makeSQLTime} = require('../../mysql-helpers')
describe('SQL date functions', () => {
    it('Takes a date object made from Jan 09, 2018 and returns the same', () => {
        const d = new Date("Jan 09, 2018");
        expect(makeSQLDate(d)).toEqual('2018-01-09')
    })
})