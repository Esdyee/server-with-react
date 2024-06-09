import { useEffect, useMemo, useState } from "react";

const heavyComputation = (num: number, stateName: string) => {
    console.log(`${stateName} 계산 시작`);
    let result = num;
    for (let i = 0; i < 10000; i++) {
        result += Math.sin(i) * Math.cos(i);
    }
    console.log(`${stateName} 계산 완료`);
    return result;
};

const DemoDifference = () => {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [effectResult, setEffectResult] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    console.log("렌더링");

    const location = {
        conuntry: isKorea ? "한국" : "외국",
    };

    // useMemo를 사용하여 무거운 계산
    const memoResult = useMemo(() => {
        return heavyComputation(number, "useMemo");
    }, [isKorea]);

    // useEffect를 사용하여 무거운 계산
    useEffect(() => {
        //즉, useEffect도 state를 이용하면 useMemo처럼 사용할 수 있음.
        //비동기적인 차이나, 추가 렌더링 차이는 있을 수 있음.
        setEffectResult(heavyComputation(number, "useEffect"));
    }, []);

    return (
        <div>
            <h1>useMemo vs useEffect</h1>
            <pre className={'whitespace-pre-wrap my-4'}>
            실제로 useMemo를 이렇게 쓰는 것은 의미가 없음.<br/>
            자식 컴포넌트가 있을 경우, 자식 컴포넌트가 렌더링될 때 부모 컴포넌트의 <br/>
            state가 변경되면 자식 컴포넌트는 다시 렌더링 됨.<br/>
            이때, useMemo를 사용하면 자식 컴포넌트가 렌더링될 때 부모 컴포넌트의 <br/>
            state가 변경되지 않았더라도 자식 컴포넌트의 렌더링을 최적화할 수 있음.<br/>
            그런데 자식 컴포넌트가 없는 경우에는 useMemo를 사용할 필요가 없음.
            </pre>
            
            <div style={{ height: '2px', background: '#ccc', margin: '20px 0' }}></div>

            <p>Number: {number}</p>
            <p>Number2: {number2}</p>
            <p>useMemo 결과: {memoResult}</p>
            <p>useEffect 결과: {effectResult}</p>

            <div className="flex justify-center mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" 
                onClick={() => setNumber(number + 1)}>숫자 증가</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                onClick={() => setNumber2(number2 + 1)}>숫자 증가2</button>
            </div>
            
        </div>
    );
};

export default DemoDifference;
