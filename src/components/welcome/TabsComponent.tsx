import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Iframe from 'react-iframe';

interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}>
      {value === index && 
      <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export const TabsComponent = () => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (_event: React.ChangeEvent<{}>, 
    newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box my={1}>
      {/* ****** COMPONENT SNIPPET START ****** */}
      <div>
        <AppBar elevation={0} position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Jobs" />
            <Tab label="Models" />
            <Tab label="Datasets"  />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        <div> <Iframe width="80%" height="500px"  url="http://52.167.83.77/hub" /></div>
           
     
        </TabPanel>
        <TabPanel value={value} index={1}>
          Models
        </TabPanel>
        <TabPanel value={value} index={2}>
          Datasets
        </TabPanel>
      </div>
      {/* ****** COMPONENT SNIPPET END ****** */}
    </Box>
  );
};