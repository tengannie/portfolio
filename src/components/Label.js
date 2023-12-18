import classes from './Label.module.css'

function Label(props) {

        return (
            <div className={classes.chip}>
                {props.label}
            </div>
            )

}

export default Label