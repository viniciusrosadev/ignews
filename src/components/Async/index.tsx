import { useState, useEffect } from "react";


export function Async() {
    const [isButtonVisible, setIsButtonVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsButtonVisible(true)
        }, 1000)
        setTimeout(() => {
            setIsButtonVisible(false)
        }, 2000)
    }, [])

    return (
        <div>
            <div>Hello world</div>
            {isButtonVisible && <button>Button</button>}
        </div>
    )
}