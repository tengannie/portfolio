
import { Box, Tab } from "@mui/material"
import { TabContext, TabList, TabPanel  } from "@mui/lab"
import {styled} from '@mui/material'
import { useState } from "react"
import WorkExperience from "./WorkExperience"
import Education from "./Education"
import classes from "./AboutMe.module.css"

function AboutMe() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      const StyledTabs = styled((props) => (
        <TabList
          {...props}
          TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
      ))({
        '& .MuiTabs-indicator': {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
          maxWidth: 40,
          width: '100%',
          backgroundColor: '#278a42',
        },
      });
      
      const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
          textTransform: 'none',
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: theme.typography.pxToRem(15),
          marginRight: theme.spacing(1),
          color: '#278a42',
          '&.Mui-selected': {
            color: "#fff"
          },
          '&.Mui-focusVisible': {
            backgroundColor: '#fff',
          },
        }),
      );

    return (
        <main>
        <h1> About Me</h1>
        <div className={classes.content}>
        <TabContext value={value}>
            <Box sx={{ width: '100%', borderBottom: 1, borderColor: "transparent" }}>
                <StyledTabs onChange={handleChange} aria-label="lab API tabs example" centered>
                 <StyledTab label="Work Experience" value="1"  />
                <StyledTab label="Education" value="2" />
                </StyledTabs>
            </Box>
            <TabPanel value="1">
                <WorkExperience/>
            </TabPanel>
            <TabPanel value="2"><Education/></TabPanel>
        </TabContext>
        </div>
        </main>
    )
}

export default AboutMe