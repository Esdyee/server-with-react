import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const getValue = (value) => {
    for (let i = 0; i < 10000000; i++) {
        value += 1;
    }
    return value;
}

// 미리 값을 구하는 방법
const totalValue = getValue(0);

const useMemoTest2 = () => {

    const [plus, setPlus] = useState(0);
    const [minus, setMinus] = useState(0);

    const handlePlusClick = () => {
        setPlus(plus + 1);
    }

    const handleMinusClick = () => {
        setMinus(minus - 1);
    }

    return (
        <>
            <div className="flex items-center">
                <PrimaryButton onClick={handlePlusClick} theme="dark" isDisabled={false}>더하기</PrimaryButton>
                <PrimaryButton onClick={handleMinusClick} theme="dark" isDisabled={false}>빼기</PrimaryButton>
            </div>
            <p>합계: {totalValue + plus - minus}</p>
        </>
    )
}

export default useMemoTest2;

