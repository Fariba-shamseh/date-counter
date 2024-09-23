import {useState} from 'react'
import './App.css'


export default function App() {
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    const date = new Date("2024-09-23");
    date.setDate(date.getDate() + count);

    return (
        <div className="container">
            <div className="step">
                <button onClick={() => setStep(step => step - 1)}>-</button>
                <span>step : {step}</span>
                <button onClick={() => setStep(step => step + 1)}>+</button>
            </div>
            <div className="count">
                <button onClick={() => setCount(count => count - step)}>-</button>
                <span>count : {count}</span>
                <button onClick={() => setCount(count => count + step)}>+</button>
                <p>
                    <span>{count > 0 ? `${count} day from today is` : count < 0 ? `${Math.abs(count)} day ago is ` : `today is`}</span>
                    <span>{date.toString()}</span>
                </p>
            </div>
        </div>
    )
}

