import { describe, it, expect } from 'vitest'
import { add } from './calculator'

describe('String Calculator', () => {
    it('should return 0 for empty string', () => {
        expect(add('')).toBe(0)
    })

    it('should return the number itself for single number string', () => {
        expect(add('1')).toBe(1)
        expect(add('5')).toBe(5)
    })

    it('should return sum of two comma-separated numbers', () => {
        expect(add('1,2')).toBe(3)
        expect(add('1,5')).toBe(6)
    })

    it('should handle any amount of numbers', () => {
        expect(add('1,2,3')).toBe(6)
        expect(add('1,2,3,4,5')).toBe(15)
    })

    it('should handle newlines between numbers', () => {
        expect(add('1\n2,3')).toBe(6)
        expect(add('1\n2\n3')).toBe(6)
    })
})