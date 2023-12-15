import classes from "../components/ExperienceDate.module.css"

function ExperienceDate(props) {
    return (
        <div className={classes.time}>
            <h2 className={classes.experience_date}>{props.ed}</h2>
            <h2 className={classes.experience_date}>|</h2>
            <h2 className={classes.experience_date}>{props.sd}</h2>
        </div>
    )
}

export default ExperienceDate