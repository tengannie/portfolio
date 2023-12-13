import classes from "./SkillCard.module.css"
import { Chip } from "@mui/material"
import {theme} from "../App"

function SkillCard() {
    return (
        <div className={classes.card}>
            <h1>Skills</h1>
            <div className={classes.chipGroup}>
                <Chip label="Scrum／Agile" color="success" theme={theme} size="lg"/>
                <Chip label="Jira" color="success" theme={theme}  size="md"/>
                <Chip label="Pivotal" color="success" theme={theme}  size="sm"/>
                <Chip label="React" color="success" theme={theme}/>
                <Chip label="Javascript" color="success" theme={theme}/>
                <Chip label="HTML5" color="success" theme={theme}/>
                <Chip label="MUI" color="success" theme={theme}/>
                <Chip label="TailwindCSS" color="success" theme={theme}/>
            </div>
            <div className={classes.chipGroup}>
                <Chip label="Google Suite" color="primary" variant="outlined" theme={theme}/>
                <Chip label="Adobe Suite Suite" color="primary" variant="outlined" theme={theme}/>
                <Chip label="Microsoft Office Suite" color="primary" variant="outlined" theme={theme}/>
            </div>
            <h1>Language</h1>
            <div className={classes.chipGroup}>
                <Chip label="Mandran" color="success" theme={theme}/>
                <Chip label="English" color="success" theme={theme}/>
                <Chip label="Korean" color="success" theme={theme}/>
            </div>
        </div>

    )
}

export default SkillCard