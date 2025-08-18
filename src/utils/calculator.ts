export function add(numbers: string): number {
    if (numbers === '') {
        return 0
    }

    let delimiter = ','
    let numbersString = numbers

    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n')
        delimiter = numbers.substring(2, delimiterEndIndex)
        numbersString = numbers.substring(delimiterEndIndex + 1)
    }

    const numberArray = numbersString.split(new RegExp(`[${delimiter},\n]`))
    return numberArray
        .filter(num => num.trim() !== '')
        .map(num => parseInt(num))
        .reduce((sum, num) => sum + num, 0)
}