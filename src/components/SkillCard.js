import classes from "./SkillCard.module.css"
import { Chip, Stack } from "@mui/material"
import {theme} from "../App"
import { useEffect, useState } from "react"

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
                <h1>Skills</h1>
                <Stack direction="column" spacing={1}>
                    <Chip label="Scrum／Agile" color="success" theme={theme}/>
                    <Chip label="Jira" color="success" theme={theme} />
                    <Chip label="Pivotal" color="success" theme={theme} />
                    <Chip label="React" color="success" theme={theme}/>
                    <Chip label="Javascript" color="success" theme={theme}/>
                    <Chip label="Git" color="success" theme={theme}/>
                    <Chip label="HTML5" color="success" theme={theme}/>
                    <Chip label="MUI" color="success" theme={theme}/>
                    <Chip label="TailwindCSS" color="success" theme={theme}/>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <Chip label="Google Suite" color="primary" variant="outlined" theme={theme}/>
                    <Chip label="Adobe Suite" color="primary" variant="outlined" theme={theme}/>
                    <Chip label="Microsoft Office Suite" color="primary" variant="outlined" theme={theme}/>
                </Stack>
                <h1>Language</h1>
                <Stack direction="column" spacing={1}>
                    <Chip label="Mandarin" color="success" theme={theme}/>
                    <Chip label="English" color="success" theme={theme}/>
                    <Chip label="Korean" color="success" theme={theme}/>
                </Stack>
            </div>
        )
    }else {
        return (
            <div className={classes.card}>
                <h2>Skills</h2>
                <div className={classes.chipGroup}>
                    <Chip label="Scrum／Agile" color="success" theme={theme}/>
                    <Chip label="Jira" color="success" theme={theme} />
                    <Chip label="Pivotal" color="success" theme={theme} />
                    <Chip label="React" color="success" theme={theme}/>
                    <Chip label="Javascript" color="success" theme={theme}/>
                    <Chip label="Git" color="success" theme={theme}/>
                    <Chip label="HTML5" color="success" theme={theme}/>
                    <Chip label="MUI" color="success" theme={theme}/>
                    <Chip label="TailwindCSS" color="success" theme={theme}/>
                </div>
                <div className={classes.chipGroup}>
                    <Chip label="Google Suite" color="primary" variant="outlined" theme={theme}/>
                    <Chip label="Adobe Suite Suite" color="primary" variant="outlined" theme={theme}/>
                    <Chip label="Microsoft Office Suite" color="primary" variant="outlined" theme={theme}/>
                </div>
                <h2>Language</h2>
                <div className={classes.chipGroup}>
                    <Chip label="Mandran" color="success" theme={theme}/>
                    <Chip label="English" color="success" theme={theme}/>
                    <Chip label="Korean" color="success" theme={theme}/>
                </div>
            </div>
        )
    }
    
}

export default SkillCard