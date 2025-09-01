import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import ConstructionPage from './pages/ConstructionPage';

function App() {

  const router = createBrowserRouter([
    // temporary render constructionPage
    {path: "/", element: <ConstructionPage/>, errorElement: <ErrorPage/>}
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
