export function add(numbers: string): number {
    if (numbers === '') {
        return 0
    }

    const negativeNumbers = extractNegativeNumbers(numbers)
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`)
    }

    const { delimiter, numbersString } = parseCustomDelimiter(numbers)

    const numberArray = numbersString
        .split(new RegExp(`[${delimiter},\n]`))
        .filter(num => num.trim() !== '')
        .map(num => parseInt(num))

    return numberArray.reduce((sum, num) => sum + num, 0)
}

const parseCustomDelimiter = (numbers: string): { delimiter: string; numbersString: string } => {
    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n')
        const delimiter = numbers.substring(2, delimiterEndIndex)
        const numbersString = numbers.substring(delimiterEndIndex + 1)
        return { delimiter, numbersString }
    }

    return { delimiter: ',', numbersString: numbers }
}

const extractNegativeNumbers = (numbers: string): number[] => {
    const allNumbers = numbers.match(/-?\d+/g) || []
    return allNumbers
        .map(num => parseInt(num))
        .filter(num => num < 0)
}