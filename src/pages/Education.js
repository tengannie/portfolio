import classes from "./Education.module.css"
import ExperienceCard from "../components/ExperienceCard"
import BulletPoint from "../components/BulletPoint"

function Education() {
    return (
        <>
        <div className={classes.list}>
            <ExperienceCard title="Management of Information System - BBA" sd="SEP 2010" ed="JAN 2014" company="National Chung Hsing University, Taiwan">
                    <BulletPoint content={
                        ["Created an English learning application that won second place in the graduation project exhibition."]}/>
            </ExperienceCard>
            </div>
        <div className={classes.list}>
                <ExperienceCard title="Chinese Literature - BA" sd="SEP 2009" ed="JAN 2014" company="National Chung Hsing University, Taiwan">
                    <BulletPoint content={
                        ["Was selected as the model student for the department."]}/>
                </ExperienceCard>
        </div>
        </>
    )

}

export default Education