import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import ConstructionPage from './pages/ConstructionPage';
import ThreePage from './pages/ThreePage';

const IS_DEV_MODE = process.env.REACT_APP_DEV_MODE === 'true';
const IS_MAINTENANCE_MODE = process.env.REACT_APP_MAINTENANCE_MODE === 'true';

let DISPLAY_PAGE;

if (IS_DEV_MODE) {
  DISPLAY_PAGE = <ThreePage />;
} else if (IS_MAINTENANCE_MODE) {
  DISPLAY_PAGE = <ConstructionPage />;
} else DISPLAY_PAGE = <MainPage />;

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
