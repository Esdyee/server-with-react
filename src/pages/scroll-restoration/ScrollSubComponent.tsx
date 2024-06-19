import { useEffect, useState } from "react";
import ScrollRestoration from "./ScrollRestoreation";

const ScrollSubComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            console.log('sub component loaded');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
        <ScrollRestoration />
        {isVisible && (
            <div>
                <h1>ScrollSubComponent</h1>
                <img src="https://loremflickr.com/300/200" />
            </div>
        )}
        </>
    );
};

export default ScrollSubComponent;
