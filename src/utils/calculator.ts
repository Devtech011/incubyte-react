const add = (numbers: string): number => {
    if (numbers === '') {
        return 0
    }

    const { delimiter, numbersString } = parseCustomDelimiter(numbers)
    const normalized = numbersString.split('\n').join(delimiter)

    const numberArray = normalized
        .split(delimiter)
        .map(num => num.trim())
        .filter(num => num !== '')
        .map(num => parseInt(num, 10))

    const negativeNumbers = numberArray.filter(num => num < 0)
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`)
    }

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

export { add }