import { useEffect, useState } from "react";

// 약관 동의 Item
type eventConfirmItem = {
    eventId: number;
    sharedConfirm: boolean;
    moveLinkConfirm: boolean;
    enterEventConfirm: boolean;
}

const useConfirm = () => {

    // 약관 동의 상태 배열
    const [eventConfirmList, setEventConfirmList] = useState<Array<eventConfirmItem>>([]);

    // 훅 불러올 때 약관 state에 세션 스토리지에 저장된 약관 정보 넣기
    useEffect(() => {
        const confirmList = getConfirm();
        setEventConfirmList(confirmList);
    }, []);

    // 세션 스토리지에서 약관 정보 가져오기
    const getConfirm = (): Array<eventConfirmItem> => {
        const confirmList: Array<eventConfirmItem> = JSON.parse(sessionStorage.getItem('confirm') || '[]');
        return confirmList;
    }

    // 해당 이벤트의 약관이 있는지 확인
    const checkEventConfirm = (eventId: number) => {
        const eventConfirm = eventConfirmList.find(item => item.eventId === eventId);
        return eventConfirm;
    }

    // 해당 이벤트의 약관이 true인지 확인
    const checkTrueConfirm = (eventId: number, confirmType: 'shared' | 'moveLink' | 'enterEvent'): boolean => {
        const eventConfirm = checkEventConfirm(eventId);
        if (eventConfirm) {
            return eventConfirm[`${confirmType}Confirm`];
        }
        return false;
    }

    // 세션 스토리지에 약관 정보 저장
    const setConfirm = (eventId: number, confirm: boolean, confirmType: 'shared' | 'moveLink' | 'enterEvent') => {

        // 해당 이벤트의 약관이 있는지 확인
        let eventConfirm = checkEventConfirm(eventId);

        if (eventConfirm) {
            // 있으면 약관 상태 업데이트
            eventConfirm = { ...eventConfirm, [`${confirmType}Confirm`]: confirm };
            const updatedList = eventConfirmList.map(item => item.eventId === eventId ? eventConfirm : item)
                                                .filter(item => item !== undefined) as eventConfirmItem[];
            setEventConfirmList(updatedList);
            sessionStorage.setItem('confirm', JSON.stringify(updatedList));
        } else {
            // 없으면 새로운 약관 생성
            eventConfirm = {
                eventId,
                sharedConfirm: confirmType === 'shared' ? confirm : false,
                moveLinkConfirm: confirmType === 'moveLink' ? confirm : false,
                enterEventConfirm: confirmType === 'enterEvent' ? confirm : false,
            };
            const updatedList = [...eventConfirmList, eventConfirm];
            setEventConfirmList(updatedList);
            sessionStorage.setItem('confirm', JSON.stringify(updatedList));
        }
    }

    return { 
        eventConfirmList, // 약관 동의 상태 배열
        checkTrueConfirm, // 해당 이벤트가 true인지 확인
        setConfirm // 세션 스토리지에 약관 정보 저장
    };
}

export { useConfirm };


