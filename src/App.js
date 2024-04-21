import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css"
const App = () => {
    const [count, setcount] = useState(0);

    const increaseCount = () => {
        setcount(count + 1)
    }
    const decreaseCount = () => {
        count>0 ? setcount(count - 1): alert("عدد داره منفی میشه ها، نکن!!!")
    }
    const resetCount = () => {
        setcount(0)
    }
    return (
        <div>
            <header>
                <h1 className="header">شمارنده من</h1>
            </header>
            <Counter inc={increaseCount} dec={decreaseCount} reset={resetCount} count={count} />
        </div>
    )

}

export default App;