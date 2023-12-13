import classes from "./WorkExperience.module.css"
import ExperienceCard from "../components/ExperienceCard"
import BulletPoint from "../components/BulletPoint"

function WorkExperience() {
    return (
        <>
        
        <div className={classes.list}>
            <ExperienceCard title="Jr. Project Manager" sd="JUL 2022" ed="DEC 2023" company="Moov Technologies Inc., Arizona">
                    <BulletPoint content={
                        ["Wrote user stories, facilitated stand-up meetings, actively engaged in Agile ceremonies, collaborated with Product and Engineering teams to drive product improvements, addressed burn-down points and blockers to ensure delivering the technical projects on time, resulting in a 30% increase in engineers' efficiency.",
                        "Conducted thorough QA testing across various platforms for web app enterprise releases and agile minor releases, ensuring successful testing and release of 4+ features within a single day.",
                        "Reviewed user behavior with Fullstory, and made improvements for optimal customer experiences accordingly, executed website translation implementation in React.js environment, resulting in a 10% reduction in user issues during web navigation."]}/>
            </ExperienceCard>
            </div>
        <div className={classes.list}>
                <ExperienceCard title="Associate Product Manager" sd="JUL 2021" ed="JUL 2022" company="JOYIN Inc., Arizona">
                    <BulletPoint content={
                        ["Led collaboration between product designers in the USA and factories in China using waterfall methodology, overseeing the transformation of 52 costume concepts into prototypes within a tight 2 month deadline.",
                        "Participated in producing more than 30 craft products, tested the prototypes and found solutions to correct and improve the products.",
                        "Coordinated with the production team and the package designers to create 20% more product package designs."]}/>
                </ExperienceCard>
        </div>
        <div className={classes.list}>
                <ExperienceCard title="Project Manager" sd="JAN 2017" ed="MAY 2021" company="Licho Information CO LTD., Taiwan">
                    <BulletPoint content={
                        ["Managed the ‘Health Care Record System’ project and coordinated with 10+ nurses and software developers.",
                        "Ran database with SQL queries to collect technical data, found solutions to correct and improve the merchandise, reducing the time to pull reports by days.",
                        "Directed website development, increasing potential customer inquiries of company services by 30%.",
                        "Cooperated with the local city council’s golf department and oversaw the ‘Golf Scoring System’ project."]}/>
                </ExperienceCard>
        </div>
        <div className={classes.list}>
                <ExperienceCard title="Assistant Project Manager" sd="JAN 2014" ed="DEC 2016" company="Licho Information CO LTD., Taiwan">
                    <BulletPoint content={
                        ["Consulted with clients on their needs, answered clients’ calls regarding usability issues and functional errors.",
                        "Tested and reviewed feedback from users and communicated with engineers about technological concerns.",
                        "Participated in ‘Web-based System Transformation’ developing program for 6 months."]}/>
                </ExperienceCard>
        </div>
        </>
    )

}

export default WorkExperience