import React, { useState } from 'react'
import { add } from '../utils/calculator'

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState<string>('')
    const [result, setResult] = useState<number | null>(null)
    const [error, setError] = useState<string>('')

    const handleCalculate = (): void => {
        try {
            setError('')
            const normalized = input.split("\\n").join("\n")
            const sum = add(normalized)
            setResult(sum)
        } catch (err) {
            setError((err as Error).message)
            setResult(null)
        }
    }

    const handleClear = (): void => {
        setInput('')
        setResult(null)
        setError('')
    }

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>String Calculator - TDD Kata</h1>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="numbers-input">Enter numbers:</label>
                <textarea
                    id="numbers-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., 1,2,3 or //;\n1;2;3"
                    style={{
                        width: '100%',
                        minHeight: '80px',
                        padding: '10px',
                        border: '2px solid #ddd',
                        borderRadius: '6px'
                    }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <button onClick={handleCalculate} style={{ marginRight: '10px', padding: '10px 20px' }}>
                    Calculate
                </button>
                <button onClick={handleClear} style={{ padding: '10px 20px' }}>
                    Clear
                </button>
            </div>

            {result !== null && (
                <div style={{ padding: '15px', backgroundColor: '#d4edda', borderRadius: '6px', marginBottom: '20px' }}>
                    <strong>Result: {result}</strong>
                </div>
            )}

            {error && (
                <div style={{ padding: '15px', backgroundColor: '#f8d7da', borderRadius: '6px', marginBottom: '20px' }}>
                    <strong>Error: {error}</strong>
                </div>
            )}
        </div>
    )
}

export default StringCalculator