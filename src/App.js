
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <HomePage/> },
    ],
  },
  {}
])

function App() {
  return (
    <div>
      <header>
        <p>Let's start all over again        </p>
        return <RouterProvider router={router}/>;
      </header>
    </div>
  );
}

export default App;
