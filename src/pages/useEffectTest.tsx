import { useEffect, useState } from "react";

const UseEffectTest = () => {

    const [count, setCount] = useState(0);
    console.log("1. render:", count);

    useEffect(() => {
        console.log("3. render:", count);
        setCount(count + 1);
    }, []);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="App">
            <p>count: {count}</p>
            {/* {console.log("2. render:", count)} */}
            <button onClick={handleClick}>증가</button>
        </div>
    )
};

export default UseEffectTest;

