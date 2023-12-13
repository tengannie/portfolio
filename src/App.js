import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import { createTheme } from "@mui/material";

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
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
  // return <RouterProvider router={router}/>;
  return <div>Hello World</div>

}

export default App;
