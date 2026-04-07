import { useState } from "react"

const Counter = () => { 

    const [count, setCount] = useState(0)

    const Money = ["Naira", "Euro", 'Riyadh', "Rupee", 'Yen', "Rand", "Dollars"]
        
    function countIncrease () {
        setCount( count + 1)
    }
    return(
        <>
            <h1> THE INTIAL STATE IS {count}</h1>
                <button onClick={countIncrease}>INCREASE</button>

                <ul>
                 {Money.map((item, index) => (
                    <li key={index}>{item}</li>
                 ))}
                </ul>
        </>
    )
}
export default Counter