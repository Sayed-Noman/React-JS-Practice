import { useState } from "react"

export const Incrementer = () => {

    const [count, setCount] = useState(0)

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{count}</h1>
            <button
                style={{ border: "2px solid #3498db" }}
                onClick={() => {
                    // setCount(count + 1)
                    setCount((previousState) => previousState + 1)
                    setCount((previousState) => previousState + 1)
                }}
            >
                Increment
            </button>
        </div>
    )
}
