import { useEffect, useState } from "react";

// 이벤트 약관 동의 Item
type eventConfirmItem = {
    eventId: number;
    sharedConfirm: boolean;
    moveLinkConfirm: boolean;
    enterEventConfirm: boolean;
}

// 트랜드 약관 동의 Item
type trendConfirmItem = {
    trendId: number;
    moveLinkConfirm: boolean;
}

const useConfirm = () => {

    // 약관 동의 상태 배열
    const [eventConfirmList, setEventConfirmList] = useState<Array<eventConfirmItem>>([]);

    // 트랜드 약관 동의 상태 배열
    const [trendConfirmList, setTrendConfirmList] = useState<Array<trendConfirmItem>>([]);

    // 훅 불러올 때 약관 state에 세션 스토리지에 저장된 약관 정보 넣기
    useEffect(() => {
        // 이벤트 약관 정보 가져오기
        const confirmList = getConfirm();
        setEventConfirmList(confirmList);

        // 트랜드 약관 정보 가져오기
        const trendConfirmList = getTrendConfirm();
        setTrendConfirmList(trendConfirmList);
    }, []);

    // 세션 스토리지에서 약관 정보 가져오기
    const getConfirm = (): Array<eventConfirmItem> => {
        const confirmList: Array<eventConfirmItem> = JSON.parse(sessionStorage.getItem('confirm') || '[]');
        return confirmList;
    }

    // 트랜드 약관 정보 가져오기
    const getTrendConfirm = (): Array<trendConfirmItem> => {
        const trendConfirmList: Array<trendConfirmItem> = JSON.parse(sessionStorage.getItem('trendConfirm') || '[]');
        return trendConfirmList;
    }

    // 해당 이벤트의 약관이 있는지 확인
    const checkEventConfirm = (eventId: number) => {
        const eventConfirm = eventConfirmList.find(item => item.eventId === eventId);
        return eventConfirm;
    }

    // 해당 트랜드의 약관이 있는지 확인
    const checkTrendConfirm = (trendId: number) => {
        const trendConfirm = trendConfirmList.find(item => item.trendId === trendId);
        return trendConfirm;
    }

    // 해당 이벤트의 약관이 true인지 확인
    const checkEventTrueConfirm = (eventId: number, confirmType: 'shared' | 'moveLink' | 'enterEvent'): boolean => {
        const eventConfirm = checkEventConfirm(eventId);
        if (eventConfirm) {
            return eventConfirm[`${confirmType}Confirm`];
        }
        return false;
    }

    // 해당 트랜드의 약관이 true인지 확인
    const checkTrendTrueConfirm = (trendId: number, confirmType: 'moveLink'): boolean => {
        const trendConfirm = checkTrendConfirm(trendId);
        if (trendConfirm) {
            return trendConfirm[`${confirmType}Confirm`];
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

    // 트랜드 약관 정보 저장
    const setTrendConfirm = (trendId: number, confirm: boolean, confirmType: 'moveLink') => {

        // 해당 트랜드의 약관이 있는지 확인
        let trendConfirm = checkTrendConfirm(trendId);

        if (trendConfirm) {
            // 있으면 약관 상태 업데이트
            trendConfirm = { ...trendConfirm, [`${confirmType}Confirm`]: confirm };
            const updatedList = trendConfirmList.map(item => item.trendId === trendId ? trendConfirm : item)
                                                .filter(item => item !== undefined) as trendConfirmItem[];
            setTrendConfirmList(updatedList);
            sessionStorage.setItem('trendConfirm', JSON.stringify(updatedList));
        } else {
            // 없으면 새로운 약관 생성
            trendConfirm = {
                trendId,
                moveLinkConfirm: confirmType === 'moveLink' ? confirm : false,
            };
            const updatedList = [...trendConfirmList, trendConfirm];
            setTrendConfirmList(updatedList);
            sessionStorage.setItem('trendConfirm', JSON.stringify(updatedList));
        }
    }

    return { 
        eventConfirmList, // 약관 동의 상태 배열
        checkEventTrueConfirm, // 해당 이벤트가 true인지 확인
        setConfirm, // 세션 스토리지에 약관 정보 저장
        trendConfirmList, // 트랜드 약관 동의 상태 배열
        checkTrendTrueConfirm, // 해당 트랜드가 true인지 확인
        setTrendConfirm, // 트랜드 약관 정보 저장
    };
}

export { useConfirm };


