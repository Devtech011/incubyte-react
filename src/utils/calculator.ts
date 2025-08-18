export function add(numbers: string): number {
    if (numbers === '') {
        return 0
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