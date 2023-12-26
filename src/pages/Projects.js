import ProjectCard from "../components/ProjectCard"
import classes from "./Projects.module.css"
import FtoC from '../pic/FtoC.png'
import TWmoov from '../pic/TWmoov.png'
import Licho_website from '../pic/licho_website.png'
import Golf from '../pic/golf.jpg'
import Tic_Tac_Toe from '../pic/tic-tac-toe.png'
import Coming_soon from '../pic/coming_soon.png'
import Portfolio from '../pic/my_portfolio.png'



function Projects() {
    return (
        <>
            <h1> My projects</h1>
            <div className={classes.flex_container}>
                <div>
                    <ProjectCard title="Fahrenheit to Celsius conversion" 
                                body="Convert Fahrenheit to Celsius or vice versa. This is a self-learning project for practicing React skills" 
                                link="https://tengannie.github.io/temperature/"
                                github="https://github.com/tengannie/temperature"
                                newtab="open"
                                skill="React (useEffect, useState), github deployment"
                                img={FtoC}/>
                </div>
                <div>
                    <ProjectCard title="Website Translation Implementation" 
                                body="Executed website translation implementation in React.js environment" 
                                link="https://tw.moov.co/"
                                newtab="open"
                                skill="React (localization, custom Hook, useState), QA testing, Jira, Pivotal, TailwindCSS, MUI"
                                img={TWmoov}/>
                </div>
                <div>
                    <ProjectCard title="Tic-Tac-Toe" 
                                body="Let's play the Tic-Tac-Toe game! This is a self-learning project for practicing React skills" 
                                link="https://tengannie.github.io/tic-tac-toe/"
                                github="https://github.com/tengannie/tic-tac-toe"
                                newtab="open"
                                skill="React (useEffect, useState), CSS, github deployment"
                                img={Tic_Tac_Toe}/>
                </div>
                <div>
                    <ProjectCard title="My Portfolio" 
                                body="Website for showcsing my work experience and projects, from design to code deployment" 
                                link="https://tengannie.github.io/portfolio"
                                github="https://github.com/tengannie/portfolio"
                                newtab="open"
                                skill="React (react-router-dom), MUI, github deployment"
                                img={Portfolio}/>
                </div>
                <div>
                    <ProjectCard title="Redesigned Website" 
                                body="Led website development, overseeing the process from mock design to code building." 
                                link="https://www.twh.com.tw"
                                newtab="open"
                                skill="Responsive web design, Figma, HTML5, CSS"
                                img={Licho_website}/>
                </div>
                <div>
                    <ProjectCard title="Golf-Scoring Website" 
                                body="This was a project that we worked with the local city council’s golf department" 
                                link="/portfolio/golf-score"
                                skill="Figma, HTML5"
                                img={Golf}/>
                </div>
                <div>
                    <ProjectCard title="Coming soon" 
                                body="Ongoing project: cart" 
                                img={Coming_soon}/>
                </div>
            </div>
        </>
    )
}

export default Projects