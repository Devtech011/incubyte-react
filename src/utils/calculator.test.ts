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
})