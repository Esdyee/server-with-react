import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';
import LoadingInfo from './components/LoadingInfo';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />
        },
        {
            path: '/loading',
            element: <LoadingInfo />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
)


export default router;
