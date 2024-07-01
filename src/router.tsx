import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';
import LoadingInfo from './components/LoadingInfo';
import UseEffectTest from './pages/useEffectTest';
import UseMemoTest from './pages/useMemoTest';
import UseMemoTest2 from './pages/useMemoTest2';
import UseCallbackTest from './pages/useCallbackTest';
import RequestAnimationFrameTest from './pages/requestAnimationFrameTest';
import UseCustomHook from './pages/use-custom-hook-test/useCustomHook';
import ScrollRestoreationTest from './pages/scroll-restoration/ScrollRestoreationTest';
import UseConfirmTest from './pages/useConfirmTest';
import UseReactQueryTest from './pages/useReactQueryTest';
import UseMutationTest from './pages/useMutationTest';

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
                    path: '/useCustomHook',
                    element: <UseCustomHook />
                },
                {
                    path: '/scroll-restoration',
                    element: <ScrollRestoreationTest />
                },
                {
                    path: '/useConfirmTest',
                    element: <UseConfirmTest />
                },
                {
                    path: '/requestAnimationFrameTest',
                    element: <RequestAnimationFrameTest />
                },
                {
                    path: '/useReactQueryTest',
                    element: <UseReactQueryTest />
                },
                {
                    path: '/useMutationTest',
                    element: <UseMutationTest />
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
