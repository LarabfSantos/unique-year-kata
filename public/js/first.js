
export default class Year {
    constructor(year) {
        this.year = year
    }

    isUnique(year) {
        let digits = String(year)
        .split('') // splits into an array of string digits ['1', '9', '8']
        .map(Number) // turns each array item into an integer

    let setOfDigits = new Set(digits)
    let areThereDuplicates = setOfDigits.size !== digits.length

    return isUnique
}
}
