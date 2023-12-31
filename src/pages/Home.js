
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import classes from "./Home.module.css"
import SkillCard from "../components/SkillCard";
import {theme} from "../App"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function HomePage() {
    return (
        <div className={classes.content60}>
            <h1>Annie Teng</h1>
            <p className={classes.homeP}>
            Detail-oriented project manager with 5 years of experience across healthcare and semiconductor domains, adept at encompassing Scrum Master responsibilities, QA testing, sprint planning based on engineers' capacities and collaborating with Product and Engineer teams to effectively meet project deadlines. 
            </p>

            <SkillCard/>
            <Link to="/tengannie/about-me">
                <div  className={classes.link}>
                <Button variant="contained" color="success" size="mdeium" theme={theme} endIcon={<ArrowForwardIosIcon/>}>
                <b>My Experience</b>
             </Button>
                </div>
            </Link>

        </div>
    
    )
}

export default HomePage;