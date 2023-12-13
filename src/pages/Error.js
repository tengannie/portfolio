import MainNavigation from "../components/MainNavigation"
import {Button} from "@mui/material"
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import {theme} from '../App'


function ErrorPage() {
    return <>
    <MainNavigation/>
    <main>
    <h1> Error !!</h1>
    <p>Somethng went wrong...</p>
    <p>Please click the button below to go back to the home page</p>
    <Link to="/portfolio">
      <div>
        <Button variant="contained" color="success" size="mdeium" theme={theme} endIcon={<HomeIcon/>}>
        <b>Home</b>
        </Button>
      </div>
     </Link>
    </main>
    </>
}

export default ErrorPage