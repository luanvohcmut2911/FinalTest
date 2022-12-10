// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { Tab, Tabs, Typography, Box } from "@mui/material";
import {Active, All, Completed}from './Page';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
    const [data, setData] = useState([
      {
        task: "task1",
        completed: true
      },
      {
        task: "task2",
        completed: false
      },
      {
        task: "task3",
        completed: true
      }
    ]);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className="app">
        <h1>#todo</h1>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Active" {...a11yProps(1)} />
              <Tab label="Completed" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <All props = {data} setData = {setData} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Active props = {data} setData = {setData} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Completed props = {data} setData = {setData} /> 
          </TabPanel>
      </Box>
      </div>
    );
}

export default App;
