import { useCallback, useState } from "react";

let name: (param: number, value: number) => number | undefined;

const UseCallbackTest = () => {

    // 초기값 100으로 셋팅
    const [value, setValue] = useState(100);

    // 1. value 값을 넘겨서 계산하는 방법
    const getValue = useCallback((param: number, value: number) => {
        const valueParam = Number(value) + param;
        console.log('값 : ', valueParam);
        return valueParam; // 함수를 캐싱함, useMemo와 다른 부분
    }, []);

    
    // 2. 의존성 배열에 value를 넣어서 계산하는 방법
    // const getValue = useCallback((param: number) => {
    //     const valueParam = Number(value) + param;
    //     console.log('값 : ', valueParam);
    //     return valueParam; // 함수를 캐싱함, useMemo와 다른 부분
    // }, [value]);


    const plusValue = getValue(7, value); // value를 값도 같이 넘겨서 계산하게 함

    if(Object.is(name, getValue)) {
        console.log('name과 getValue는 같습니다.');
    } else {
        console.log('name과 getValue는 다릅니다.');
        name = getValue;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    }

    return (
        <div>
            <h1>useCallback 테스트</h1>
            
            <p>카운트: {plusValue}</p>
            <input type="number" value={value} onChange={handleChange} 
            className="border-2 border-gray-300 focus:border-blue-500 rounded-md p-2 mt-2" />
        </div>
    )
}

export default UseCallbackTest;

