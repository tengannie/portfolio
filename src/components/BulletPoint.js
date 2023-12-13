import classes from "./BulletPoint.module.css"

function BulletPoint(props) {
    return (
        <>
            {props.content.map((data) => 
            <ul className={classes.a}>
                <li >{data}</li>
            </ul>
            )}
        </>
    )
}

export default BulletPoint