import classes from "../components/ExperienceCard.module.css"
import ExperienceDescription from "./ExperienceDescription"
import ExperienceDate from "./ExperienceDate"
import { useState, useEffect } from "react";
import ExperienceCardMobile from "./ExperienceCardMobile"

function ExperienceCard(props) {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 800;

    if(isMobile) {
        return <ExperienceCardMobile sd={props.sd} ed={props.ed} title={props.title} company={props.company}>
             {props.children}
        </ExperienceCardMobile>
    } else {
        return (
            <div className={classes.card}>
                <div className={classes.time}>
                    <ExperienceDate sd={props.sd} ed={props.ed}/>
                </div>
                <div className={classes.description}>
                    <ExperienceDescription title={props.title} company={props.company}>
                    {props.children}
                    </ExperienceDescription>
                </div>
            </div>
        )
    }
    
}

export default ExperienceCard