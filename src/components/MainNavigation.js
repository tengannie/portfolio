import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"


function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><Link to="/portfolio">Home</Link></li>
                    <li><Link to="/portfolio/about-me">About Me</Link></li>
                    {/* <li><Link to="/projects">Projects</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation