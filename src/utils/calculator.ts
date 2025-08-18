export function add(numbers: string): number {
    if (numbers === '') {
        return 0
    }

    const numberArray = numbers.split(',')
    return numberArray
        .map(num => parseInt(num))
        .reduce((sum, num) => sum + num, 0)
}