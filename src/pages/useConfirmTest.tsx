import { useState } from "react";
import { useConfirm } from "../hook/useConfirm";

const useConfirmTest = () => {
    const {
        eventConfirmList,
        checkEventTrueConfirm,
        setConfirm,
        trendConfirmList,
        checkTrendTrueConfirm,
        setTrendConfirm,
    } = useConfirm();
    const [checkEventShared, setCheckEventShared] = useState(false);
    const [checkTrendMoveLink, setCheckTrendMoveLink] = useState(false);

    return (
        <div>
            <div>
                <div className={"flex gap-2"}>
                    <button
                        className={"bg-blue-500 text-white p-2 rounded-md"}
                        onClick={() => setConfirm(4, true, "shared")}
                    >
                        shared 동의
                    </button>
                    <button
                        className={"bg-blue-500 text-white p-2 rounded-md"}
                        onClick={() => setConfirm(4, true, "moveLink")}
                    >
                        moveLink 동의
                    </button>
                    <button
                        className={"bg-blue-500 text-white p-2 rounded-md"}
                        onClick={() => setConfirm(4, true, "enterEvent")}
                    >
                        enterEvent 동의
                    </button>
                </div>
                <pre>{JSON.stringify(eventConfirmList, null, 2)}</pre>
            </div>



            <div>
                <button
                    className={"bg-blue-500 text-white p-2 rounded-md"}
                    onClick={() =>
                        setCheckEventShared(checkEventTrueConfirm(4, "shared"))
                    }
                >
                    shared 동의 체크
                </button>
            </div>
            <div>
                {checkEventShared ? "shared 동의했음" : "shared 동의 안했음"}
            </div>

            <div className={"mt-20"}>
                <div>
                    <button
                        className={"bg-blue-500 text-white p-2 rounded-md"}
                        onClick={() => setTrendConfirm(10004, true, "moveLink")}
                    >
                        moveLink 동의
                    </button>
                </div>
                <pre>{JSON.stringify(trendConfirmList, null, 2)}</pre>

                <div>
                    <button
                        className={"bg-blue-500 text-white p-2 rounded-md"}
                        onClick={() =>
                            setCheckTrendMoveLink(
                                checkTrendTrueConfirm(10004, "moveLink"),
                            )
                        }
                    >
                        moveLink 동의 체크
                    </button>
                </div>
                <div>
                    {checkTrendMoveLink
                        ? "moveLink 동의했음"
                        : "moveLink 동의 안했음"}
                </div>
            </div>
        </div>
    );
};

export default useConfirmTest;
