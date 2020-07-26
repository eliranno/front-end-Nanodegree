import { checkDates } from "../js/utils"


test('invalid travel dates', () => {
    let startDate = new Date(2020, 7, 26);
    let endDate = new Date(2020, 7, 25);
    const result = checkDates(startDate, endDate);
    expect(result).toEqual(false);
});



test('valid travel dates', () => {
    let startDate = new Date(2020, 7, 26);
    let endDate = new Date(2020, 7, 29);
    const result = checkDates(startDate, endDate);
    expect(result).toEqual(true);
});