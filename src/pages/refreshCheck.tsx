import { useEffect, useState } from "react";

const refreshCheck = () => {

    const [saveNavEntry, setSaveNavEntry] = useState<PerformanceNavigationTiming | null>(null);

    useEffect(() => {
        if (window.performance) {
            const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];

            // 페이지에 aveNavEntry 출력을 위해 state에 저장
            setSaveNavEntry(navEntries[0]);

            console.log(navEntries[0]);

            if (navEntries[0].type === "reload") {
                alert("이 페이지는 새로고침 되었습니다.");
            } else {
                alert("다른 페이지에서 이 페이지로 이동했습니다.");
            }
        }
    }, []);

    const buttonClass = 'bg-blue-500 text-white p-2 rounded-md cursor-pointer';

    return (
        <div>
            <h1>Refresh Check</h1>

            <button onClick={() => {
                window.location.reload();
            }} className={buttonClass}>새로고침</button>


            <button onClick={() => {
                window.location.href = 'https://www.naver.com';
            }} className={buttonClass + ' ml-2'}>Naver로 이동</button>

            <pre className="mt-4">
                <h2>새로고침 여부 확인</h2>
                <p>{JSON.stringify(saveNavEntry, null, 4)}</p>
            </pre>
        </div>
    )
}

export default refreshCheck;