import { describe, it, expect } from 'vitest'
import { add } from './calculator'

describe('String Calculator', () => {
    it('should return 0 for empty string', () => {
        expect(add('')).toBe(0)
    })
})