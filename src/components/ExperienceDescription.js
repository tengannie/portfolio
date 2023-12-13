
import classes from "./ExperienceDescription.module.css"

function ExperienceDescription(props) {
    return (
        <div className={classes.content}>
            <p className={classes.title}><b>{props.title}</b></p>
            <p className={classes.company}><i><b>{props.company}</b></i></p>
            {props.children}
        </div>
    )
}

export default ExperienceDescription