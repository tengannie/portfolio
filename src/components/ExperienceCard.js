import classes from "../components/ExperienceCard.module.css"
import ExperienceDescription from "./ExperienceDescription"
import ExperienceDate from "./ExperienceDate"

function ExperienceCard(props) {
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

export default ExperienceCard