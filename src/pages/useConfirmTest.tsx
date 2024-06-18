import { useState } from "react";
import { useConfirm } from "../hook/useConfirm";

const useConfirmTest = () => {
    const { eventConfirmList, checkTrueConfirm,  setConfirm } = useConfirm();
    const [checkShared, setCheckShared] = useState(false);
    return (
        <div>
            <div className={'flex gap-2'}>
                <button className={'bg-blue-500 text-white p-2 rounded-md'} onClick={() => setConfirm(4, true, 'shared')}>shared 동의</button>
                <button className={'bg-blue-500 text-white p-2 rounded-md'} onClick={() => setConfirm(4, true, 'moveLink')}>moveLink 동의</button>
                <button className={'bg-blue-500 text-white p-2 rounded-md'} onClick={() => setConfirm(4, true, 'enterEvent')}>enterEvent 동의</button>
            </div>
            <pre>
                {JSON.stringify(eventConfirmList, null, 2)}
            </pre>

            <div>
                <button className={'bg-blue-500 text-white p-2 rounded-md'} onClick={() => setCheckShared(checkTrueConfirm(4, 'shared'))}>shared 동의 체크</button>
            </div>
            <div>
                {checkShared ? 'shared 동의했음' : 'shared 동의 안했음'}
            </div>
        </div>
    )
}

export default useConfirmTest;


