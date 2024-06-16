import { useEffect, useState } from "react";

const useNetwork = () => {
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        const handleOnline = () => {
            console.log('온라인 상태');
            setIsOnline(true);
        };
        const handleOffline = () => {
            console.log('오프라인 상태');
            setIsOnline(false);
        };
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // 초기 네트워크 상태 설정
        setIsOnline(navigator.onLine);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return { isOnline };
};

export default useNetwork;


