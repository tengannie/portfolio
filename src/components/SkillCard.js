import classes from "./SkillCard.module.css"
import { Chip, Stack } from "@mui/material"
import {theme} from "../App"
import { useEffect, useState } from "react"
import Label from "./Label"

function SkillCard() {

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
        return (
            <div className={classes.mobile}>
                <h2>Skills</h2>
                <h3 className={classes.chipGroupTitle}>Project management</h3>
                    <Label label="Agile"/>
                    <Label label="Jira"/>
                    <Label label="Pivotal"/>
                    <Label label="Trello"/>
                    <Label label="Scrum"/>
                <hr className={classes.hr}></hr>
                    <h3 className={classes.chipGroupTitle}>Coding</h3>
                    <Label label="React"/>
                    <Label label="Javascript" />
                    <Label label="Git"/>
                    <Label label="HTML5" />
                    <Label label="MUI" />
                    <Label label="TailwindCSS"/>
                <hr className={classes.hr}></hr>
                    <h3 className={classes.chipGroupTitle}>Suite / Tool</h3>
                    <Label label="Google Suite" />
                    <Label label="Adobe Suite"/>
                    <Label label="Microsoft Office Suite"/>
                <hr className={classes.hr}></hr>
                    <h3 className={classes.chipGroupTitle}>Language</h3>
                    <Label label="Mandarin"/>
                    <Label label="English"/>
                    <Label label="Korean"/>
            </div>
        )
    }else {
        return (
            <>
            <h2>Skills</h2>
            <div className={classes.card}>
            <div className={classes.chipGroup}>
                <h3 className={classes.chipGroupTitle}>Project management</h3>
                    <Label label="Agile"/>
                    <Label label="Jira"/>
                    <Label label="Pivotal"/>
                    <Label label="Trello"/>
                    <Label label="Scrum"/>

            </div>
            <div className={classes.line}></div>
            <div className={classes.chipGroup}>
                <h3 className={classes.chipGroupTitle}>Coding</h3>
                    <Label label="React"/>
                    <Label label="Javascript" />
                    <Label label="Git"/>
                    <Label label="HTML5" />
                    <Label label="MUI" />
                    <Label label="TailwindCSS"/>
            </div>
            <div className={classes.line}></div>
             <div className={classes.chipGroup}>
                <h3 className={classes.chipGroupTitle}>Suite / Tool</h3>
                    <Label label="Google Suite" />
                    <Label label="Adobe Suite"/>
                    <Label label="Microsoft Office Suite"/>
                </div>
                <div className={classes.line}></div>
                <div className={classes.chipGroup}>
                <h3 className={classes.chipGroupTitle}>Language</h3>
                    <Label label="Mandarin"/>
                    <Label label="English"/>
                    <Label label="Korean"/>
                </div>
            </div>
            </>
        )
    }
    
}

export default SkillCard