
// https://stackoverflow.com/a/72345080

import { Card, CardContent, Grid, Typography, FormControl, Radio, FormControlLabel, RadioGroup, FormLabel } from '@mui/material';
import React from 'react';
import "./App.css";
import logo from "./logo.svg";
import { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useState, useCallback } from 'react';
import SubmitButton from './SubmitButton';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
    let checked = false;
    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }
    return <StyledFormControlLabel checked={checked} {...props} />;
}

function App() {

    const [startingSystem, setStartingSystem] = useState("1");
    const [auxiliaryPTO, setAuxiliaryPTO] = useState("1");
    const [oilSystem, setOilSystem] = useState("1");
    const [fuelSystem, setFuelSystem] = useState("1");
    const [coolingSystem, setCoolingSystem] = useState("1");
    const [exhaustSystem, setExhaustSystem] = useState("1");
    const [mountingSystem, setMountingSystem] = useState("1");
    const [engineManagementSystem, setEngineManagementSystem] = useState("1");
    const [monitoringSystem, setMonitoringSystem] = useState("1");
    const [powerTransmission, setPowerTransmission] = useState("1");
    const [gearbox, setGearbox] = useState("1");

    const [expanded, setExpanded] = React.useState('panel1');;

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const triggerAPI = useCallback(async () => {
        const res = await axios.put("http://localhost:8072/analysiscontrol/run",
            {
                startingSystem: startingSystem,
                auxiliaryPTO: auxiliaryPTO,
                oilSystem: oilSystem,
                fuelSystem: fuelSystem,
                coolingSystem: coolingSystem,
                exhaustSystem: exhaustSystem,
                mountingSystem: mountingSystem,
                engineManagementSystem: engineManagementSystem,
                monitoringSystem: monitoringSystem,
                powerTransmission: powerTransmission,
                gearbox: gearbox
            }
        );
        console.log(res)
    }, [startingSystem, auxiliaryPTO, oilSystem, fuelSystem, coolingSystem, exhaustSystem, mountingSystem, engineManagementSystem, monitoringSystem, engineManagementSystem, monitoringSystem, powerTransmission, gearbox]);

    const handleChangeStartingSystem = useCallback((event) => {
        setStartingSystem(event.target.value);
    }, []);

    const handleChangeAuxiliaryPTO = useCallback((event) => {
        setAuxiliaryPTO(event.target.value);
    }, []);

    const handleChangeOilSystem = useCallback((event) => {
        setOilSystem(event.target.value);
    }, []);

    const handleChangeFuelSystem = useCallback((event) => {
        setFuelSystem(event.target.value);
    }, []);

    const handleChangeCoolingSystem = useCallback((event) => {
        setCoolingSystem(event.target.value);
    }, []);

    const handleChangeExhaustSystem = useCallback((event) => {
        setExhaustSystem(event.target.value);
    }, []);

    const handleChangeMountingSystem = useCallback((event) => {
        setMountingSystem(event.target.value);
    }, []);

    const handleChangeEngineManagementSystem = useCallback((event) => {
        setEngineManagementSystem(event.target.value);
    }, []);

    const handleChangeMonitoringSystem = useCallback((event) => {
        setMonitoringSystem(event.target.value);
    }, []);

    const handleChangePowerTransmission = useCallback((event) => {
        setPowerTransmission(event.target.value);
    }, []);

    const handleChangeGearbox = useCallback((event) => {
        setGearbox(event.target.value);
    }, []);

    return (
        <div className='App'>

            {/* <Alert variant="filled" severity="info" onClose={() => { }}>This is an info alert — check it out!</Alert> */}
            <header className="App-header" align="center">
                <img src={logo} className="App-logo" alt="logo" />
                <Typography gutterBottom variant="h3" align='center'>
                    Ship Configurator
                </Typography>
            </header>
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Card style={{ maxWidth: 600, margin: "0 auto", padding: "10px 10px" }}>
                        <CardContent>
                            <Typography gutterBottom variant='h5'>
                                Get Started
                            </Typography>
                            <Typography gutterBottom color="textSecondary" variant='body2' component="p">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} item>
                    <Card style={{ maxWidth: 600, margin: "0 auto", padding: "10px 10px" }}>
                        <form>
                            <Grid container spacing={2}>

                                <Grid xs={12} item>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"

                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                General settings
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="startingSystem">Starting System</FormLabel>
                                                    <RadioGroup row name="startingSystem" defaultValue="1" onChange={handleChangeStartingSystem}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="auxiliaryPTO">Auxiliary PTO</FormLabel>
                                                    <RadioGroup row name="auxiliaryPTO" defaultValue="1" onChange={handleChangeAuxiliaryPTO}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="oilSystem">Oil System</FormLabel>
                                                    <RadioGroup row name="oilSystem" defaultValue="1" onChange={handleChangeOilSystem}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="fuelSystem">Fuel System</FormLabel>
                                                    <RadioGroup row name="fuelSystem" defaultValue="1" onChange={handleChangeFuelSystem}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="coolingSystem">Cooling System</FormLabel>
                                                    <RadioGroup row name="coolingSystem" defaultValue="1" onChange={handleChangeCoolingSystem}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="exhaustSystem">Exhaust System</FormLabel>
                                                    <RadioGroup row name="exhaustSystem" defaultValue="1" onChange={handleChangeExhaustSystem}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="mountingSystem">Mounting System</FormLabel>
                                                    <RadioGroup row name="mountingSystem" defaultValue="1" onChange={handleChangeMountingSystem}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="engineManagementSystem">Engine ManagementSystem</FormLabel>
                                                    <RadioGroup row name="engineManagementSystem" defaultValue="1" onChange={handleChangeEngineManagementSystem}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="monitoringSystem">Monitoring System</FormLabel>
                                                    <RadioGroup row name="monitoringSystem" defaultValue="1" onChange={handleChangeMonitoringSystem}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="powerTransmission">Power Transmission</FormLabel>
                                                    <RadioGroup row name="powerTransmission" defaultValue="1" onChange={handleChangePowerTransmission}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="gearbox">Gearbox</FormLabel>
                                                    <RadioGroup row name="gearbox" defaultValue="1" onChange={handleChangeGearbox}>
                                                        <MyFormControlLabel value="1" label="Option 1" control={<Radio />} />
                                                        <MyFormControlLabel value="2" label="Option 2" control={<Radio />} />
                                                        <MyFormControlLabel value="3" label="Option 3" control={<Radio />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                                <Grid xs={12} item>
                                    <SubmitButton triggerAPI={triggerAPI} />
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div >
    )
}

export default App;