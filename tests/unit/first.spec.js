import Year from '../../public/js/first.js'
describe('tests', () => {
    describe('control test with boolean', () => {
        test('true is true', () => {
            expect(true).toBe(true)
        });
    });
    describe('year class', () => {
        test('the year is unique when no digits are repeated', () => {
            const yearToCheck = new Year(1984)
            expect(yearToCheck.isUnique()).toBe(true);
        });

        test('the year is not unique when digits repeat', () => {
            const yearToCheck = new Year(1994)
            expect(yearToCheck.isUnique()).toBe(false);
        });
    });
  });
