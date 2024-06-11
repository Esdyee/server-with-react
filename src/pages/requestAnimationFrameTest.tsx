import { useEffect, useState } from "react";

const requestAnimationFrameTest = () => {
    const [count, setCount] = useState(0);

    // 확인버튼 눌렀는지 확인
    const [isConfirm, setIsConfirm] = useState(false);

    // 팝업 열렸는지 확인
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(setCount);
        return () => cancelAnimationFrame(id);
    }, []);

    const getHandleClick = () => {
        return async () => {
            const isPopupShown = await getIsConfirm();
            console.log("isPopupShown", isPopupShown);
            if (isPopupShown) {
                return;
            }

            alert("클릭 되었습니다.");
        };
    };

    const getIsConfirm = async (): Promise<boolean> => {
        if (!isConfirm) {
            // 팝업 열기
            setIsPopupOpen(true);

            // 팝업이 닫힐 때까지 대기하는 로직 추가
            return new Promise((resolve) => {
                const checkPopupClosed = () => {
                    if (!isPopupOpen) {
                        resolve(true);
                    } else {
                        requestAnimationFrame(checkPopupClosed);
                    }
                };
                requestAnimationFrame(checkPopupClosed);
            });
        }

        return Promise.resolve(false);
    };

    return (
        <>
            <pre>isConfirm: {isConfirm.toString()}</pre>
            <div>{count}</div>
            <div>
                <button
                    onClick={getHandleClick()}
                    className="bg-amber-500 text-white p-2 rounded-md"
                >
                    클릭
                </button>
            </div>
            <RequestTestPopup
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
                setIsConfirm={setIsConfirm}
            />
        </>
    );
};

const RequestTestPopup = ({
    isPopupOpen,
    setIsPopupOpen,
    setIsConfirm,
}: {
    isPopupOpen: boolean;
    setIsPopupOpen: (isPopupOpen: boolean) => void;
    setIsConfirm: (isConfirm: boolean) => void;
}) => {
    const togglePopup = () => {
        setIsConfirm(true); // 확인버튼 눌렀다고 상태 변경
        setIsPopupOpen(!isPopupOpen); // 팝업 닫히고 열림 상태 변경
    };

    return (
        <>
            {isPopupOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "300px",
                        height: "200px",
                        backgroundColor: "white",
                        border: "1px solid black",
                        padding: "20px",
                        boxSizing: "border-box",
                    }}
                >
                    <p>여기는 팝업 내용입니다!</p>
                    <button onClick={togglePopup}>닫기</button>
                </div>
            )}
        </>
    );
};

export default requestAnimationFrameTest;
