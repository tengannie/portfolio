import classes from "../components/ExperienceDate.module.css"

function ExperienceDate(props) {
    return (
        <div className={classes.time}>
            <h2>{props.ed}</h2>
            <h2>|</h2>
            <h2>{props.sd}</h2>
        </div>
    )
}

export default ExperienceDate