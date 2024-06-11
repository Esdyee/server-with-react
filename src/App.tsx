import ReactDOM from "react-dom/client";
import "./App.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";


function App() {
    const location = useLocation();

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '200px', height: '100vh', background: '#f0f0f0', padding: '20px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/useEffectTest">useEffect 테스트</Link></li>
                        <li><Link to="/useMemoTest">useMemo 테스트</Link></li>
                        {/* <li><Link to="/useMemoTest2">useMemo 테스트2</Link></li> */}
                        <li><Link to="/useCallbackTest">useCallback 테스트</Link></li>
                        <li><Link to="/requestAnimationFrameTest">requestAnimationFrame 테스트</Link></li>
                        <li><Link to="/loading">로딩 정보</Link></li>
                    </ul>
                </div>
                <div style={{ flex: 1 }}>
                    {location.pathname === '/' ? <Home /> : <Outlet />}
                </div>
            </div>
        </div>
    );
}

export default App;
