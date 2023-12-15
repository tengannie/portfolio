import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom"
import classes from './ProjectCard.module.css'
import { styled } from '@mui/material/styles';
import { theme } from '../App';


function ProjectCard(props) {

    const CustomizedCard = styled(Card)`
    margin: 1rem;
    border: 2px solid;
    border-color: var(--color-primary-800);
    background-color: rgba(0,0,0,0.1);
    border-radius: 1rem;
    align-items: center;
    color: #FFF;
    text-align: left;
    `;

    const hh = props.height ? props.height : "200"

    const hasLink = props.link;
    const hasGithub = props.github;
    const open = props.newtab ? "_blank" : ""
    
    return (
        <div>
            <CustomizedCard sx={{ maxWidth: 300, minHeight: 480 }}>
                <div className={classes.card_media}>
                <CardMedia
                component="img"
                alt={props.title}
                height={hh}
                image={props.img}
                />
                </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"><b>{props.title}</b></Typography>
                <Typography variant="body2" color="#FFF"> {props.body}</Typography>
                <Typography variant="body2" color="#5F5F5F"> <b>{props.skill}</b></Typography>
            </CardContent>
            <div className={classes.card_action}>
            <CardActions>
                {hasLink ? <Link to={props.link} target={open}><Button size="small"><LinkIcon sx={{ color: "#20692c" }} theme={theme}/></Button></Link> : <></> }
                {hasGithub ? <Link to={props.github} target={open}><Button size="small"><GitHubIcon sx={{ color: "#20692c" }}/></Button></Link> : <></>}
            </CardActions>
            </div>
            </CustomizedCard>
      </div>
    )

}

export default ProjectCard;