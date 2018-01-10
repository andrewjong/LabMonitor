const { makeSQLDate, makeSQLTime} = require('../../mysql-helpers')

describe('SQL date functions', () => {
    const dateTestStr = `Jan 09, 2018`
    it(`Takes a date object made from ${dateTestStr} and returns the same`, () => {
        const d = new Date(dateTestStr);
        expect(makeSQLDate(d)).toEqual('2018-01-09');
    });
    const timeTestStr = `Jan 09, 2018 3:14:15`
    it(`Takes a date object made from ${timeTestStr} and returns the same`, () => {
        const d = new Date(timeTestStr);
        expect(makeSQLTime(d)).toEqual('3:14:15');
    });
});