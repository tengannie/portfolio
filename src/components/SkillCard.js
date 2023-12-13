import classes from "./SkillCard.module.css"
import { Chip } from "@mui/material"
import {theme} from "../App"

function SkillCard() {
    return (
        <div className={classes.card}>
            <h1>Skills</h1>
            <div className={classes.chipGroup}>
                <Chip label="Scrum／Agile" color="primary" theme={theme} size="lg"/>
                <Chip label="Jira" color="primary" theme={theme}  size="md"/>
                <Chip label="Pivotal" color="primary" theme={theme}  size="sm"/>
            </div>

            <div className={classes.chipGroup}>
                <Chip label="React" color="success" theme={theme}/>
                <Chip label="Javascript" color="success" theme={theme}/>
                <Chip label="HTML5" color="success" theme={theme}/>
                <Chip label="MUI" color="success" theme={theme}/>
                <Chip label="TailwindCSS" color="success" theme={theme}/>
            </div>
            <div className={classes.chipGroup}>
                <Chip label="Google Suite" variant="outlined" color="success" theme={theme}/>
                <Chip label="Adobe Suite Suite" variant="outlined" color="success" theme={theme}/>
                <Chip label="Microsoft Office Suite" variant="outlined" color="success" theme={theme}/>
            </div>
            <div className={classes.chipGroup}>
                <Chip label="Mandran" color="primary" theme={theme} variant="outlined" />
                <Chip label="English" color="primary" theme={theme} variant="outlined" />
                <Chip label="Korean" color="primary" theme={theme} variant="outlined" />
            </div>
        </div>

    )
}

export default SkillCard