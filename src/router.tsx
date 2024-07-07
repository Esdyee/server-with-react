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
import RefreshCheck from './pages/refreshCheck';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    // useEffect 테스트 페이지
                    path: '/useEffectTest',
                    element: <UseEffectTest />
                },
                {
                    // useMemo 테스트 페이지
                    path: '/useMemoTest',
                    element: <UseMemoTest />
                },
                {

                    path: '/useMemoTest2',
                    element: <UseMemoTest2 />
                },
                {
                    // useCallback 테스트 페이지
                    path: '/useCallbackTest',
                    element: <UseCallbackTest />
                },
                {
                    // 나만의 커스텀 훅 만들어 보기
                    path: '/useCustomHook',
                    element: <UseCustomHook />
                },
                {
                    // 스크롤 위치 저장 하는 Test
                    path: '/scroll-restoration',
                    element: <ScrollRestoreationTest />
                },
                {
                    // Local Storage에 약관 저장해보는 페이지
                    path: '/useConfirmTest',
                    element: <UseConfirmTest />
                },
                {
                    // requestAnimation으로 팝업 닫히는 상태 관리해보기
                    path: '/requestAnimationFrameTest',
                    element: <RequestAnimationFrameTest />
                },
                {
                    // react query 사용해보기
                    path: '/useReactQueryTest',
                    element: <UseReactQueryTest />
                },
                {
                    // react query 사용해보기(삽입, 수정, 삭제)
                    path: '/useMutationTest',
                    element: <UseMutationTest />
                },
                {
                    // 자기 페이지에서 refresh 될 때와 다른 페이지에서 해당 페이지로 이동할 때 차이 구분하는 방법 테스트
                    path: '/refreshCheck',
                    element: <RefreshCheck />
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
