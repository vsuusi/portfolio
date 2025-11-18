import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import ConstructionPage from './pages/ConstructionPage';

const IS_DEV_MODE = process.env.REACT_APP_DEV_MODE === 'true';
const DISPLAY_PAGE = IS_DEV_MODE ? <ConstructionPage /> : <MainPage />;

function App() {
  const router = createBrowserRouter([
    { path: '/', element: DISPLAY_PAGE },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
