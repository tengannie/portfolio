
import GolfMock from '../pic/golf-mock.jpeg'
import classes from './GolfScore.module.css'
import Golf from '../pic/golf.jpg'
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import {theme} from "../App"
import HomeIcon from '@mui/icons-material/Home';

function GolfScore() {
    return (
        <>
        <div className={classes.content_main}>
                <img src={GolfMock} className={classes.image}/>
            <div>
            <p className={classes.golf_p}>This was a project that we worked with the local city council’s golf department, who is dedicated to holding as many golf games as possible for people in the city. Therefore, the website not only needs to provide game information to visitors, but also need to give out information about our clients. </p>
            <p className={classes.golf_p}>On the top will be the navigation bar, which has the logo and the link for our client’s information and contact method. </p>
            <p className={classes.golf_p}>In the middle of the website will be the photo zone, where we can place the information of upcoming golf games or photos of games and players.</p>
            <p className={classes.golf_p}>Down below the photo zone will be links to different functions, such as information for upcoming and past games, scores and an online signup form. Part of the information will be shown further down on the page, and each block will have a ‘More’ button f accessing more information."</p>
            </div>
            <img src={Golf} className={classes.image}/>
        </div>
                    <Link to="/portfolio"> 
                    <div  className={classes.link}>
                    <Button variant="contained" color="success" size="mdeium" theme={theme} endIcon={<HomeIcon/>}>
                    <b>Back</b>
                 </Button>
                    </div>
                </Link>
                </>
    )

}

export default GolfScore;