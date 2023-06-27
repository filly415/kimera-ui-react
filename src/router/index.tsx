import { 
  LandingPage, 
  HomePage, 
  ScreentShotReady, 
  ScreenShotStart, 
  ScreenShotEnding , 
  Layout 
} from '../Pages';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/landing',
        element: <LandingPage />
      },
      {
        path: '/screenshot-ready/:id',
        element: <ScreentShotReady />
      },
      {
        path: '/screenshot-start/:id',
        element: <ScreenShotStart />
      },
      {
        path: '/screenshot-end/:id',
        element: <ScreenShotEnding />
      }
    ]
  }
])

export default router;
