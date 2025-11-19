import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import ConstructionPage from './pages/ConstructionPage';
import ThreePage from './pages/ThreePage';

// temp local switches to control
const IS_DEV_MODE = false;
const IS_MAINTENANCE_MODE = true;

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
