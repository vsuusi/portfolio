import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <MainPage/>, errorElement: <ErrorPage/>}
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
