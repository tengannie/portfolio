import classes from "../components/ExperienceCardMobile.module.css"

function ExperienceCardMobile(props) {
   
        return (
            <div className={classes.card}>
                <div className={classes.time}><b>{props.sd} - {props.ed}</b></div>
                <div className={classes.description}>
                    <div className={classes.title}><b>{props.title}</b></div> 
                    <div className={classes.company}><i>{props.company}</i></div>
                    {props.children}
                </div>
            </div>
        )
    }
    

export default ExperienceCardMobile