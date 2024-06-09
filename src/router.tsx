import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';
import LoadingInfo from './components/LoadingInfo';
import UseEffectTest from './pages/useEffectTest';
import UseMemoTest from './pages/useMemoTest';
import UseMemoTest2 from './pages/useMemoTest2';
import UseCallbackTest from './pages/useCallbackTest';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/useEffectTest',
                    element: <UseEffectTest />
                },
                {
                    path: '/useMemoTest',
                    element: <UseMemoTest />
                },
                {
                    path: '/useMemoTest2',
                    element: <UseMemoTest2 />
                },
                {
                    path: '/useCallbackTest',
                    element: <UseCallbackTest />
                },
                {
                    path: '/loading',
                    element: <LoadingInfo />
                },
            ]
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
)


export default router;
