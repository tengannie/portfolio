
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import { createTheme } from "@mui/material";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/portfolio', element: <HomePage/> },
      { path: '/portfolio/about-me', element: <AboutMe/> },
      { path: '/portfolio/projects', element: <Projects/> },
    ],
  },
  {}
])

export const theme = createTheme({
  palette: {
    primary: {
      main:"#fff",
    },
    success: {
      main:"#20692c",
    }
  }
})

function App() {
  return (
    <div>
      <header>
        <RouterProvider router={router}/>
      </header>
    </div>
  );
}

export default App;
