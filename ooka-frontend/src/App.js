import { Button, Card, CardContent, Grid, Typography, FormControl, Radio, FormControlLabel, RadioGroup, FormLabel } from '@mui/material';
import React from 'react';
import "./App.css";
import logo from "./logo.svg";

function App() {
    return (
        <div className='App'>

            <header className="App-header" align="center">
                <img src={logo} className="App-logo" alt="logo" />
                <Typography gutterBottom variant="h3" align='center'>
                    Unsere App
                </Typography>
            </header>


            <Card style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom variant='h5'>
                        Analysis Control
                    </Typography>


                    <form>
                        <Grid container spacing={2}>
                            {/* <Grid xs={12} sm={6} item>
                                <TextField label="First Name" placeholder='Please enter first name' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Last Name" placeholder='Please enter last name' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="email" label="Email" placeholder='Please enter email' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="number" label="Phone" placeholder='Please enter phone' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label="Message" multiline rows={8} placeholder='Type message' variant='outlined' fullWidth required />
                            </Grid> */}

                            {/* 

                            <Grid xs={12} item>
                                <TextField type="text" label="StartingSystem" placeholder='Please enter the StartingSystem' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="AuxiliaryPTO" placeholder='Please enter the AuxiliaryPTO' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="OilSystem" placeholder='Please enter the OilSystem' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="FuelSystem" placeholder='Please enter the FuelSystem' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="CoolingSystem" placeholder='Please enter the CoolingSystem' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="ExhaustSystem" placeholder='Please enter the ExhaustSystem' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="MountingSystem" placeholder='Please enter the MountingSystem' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="EngineManagementSystem" placeholder='Please enter the EngineManagementSystem' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="MonitoringSystem" placeholder='Please enter the MonitoringSystem' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="PowerTransmission" placeholder='Please enter the PowerTransmission' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" label="Gearbox" placeholder='Please enter the Gearbox' variant='outlined' fullWidth required />
                            </Grid> */}

                            <Grid xs={12} item>
                                <Typography gutterBottom color="textSecondary" variant='body2' component="p">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                </Typography>
                            </Grid>

                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">StartingSystem</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="Op1"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Op1" control={<Radio />} label="Option 1" />
                                        <FormControlLabel value="Op2" control={<Radio />} label="Option 2" />
                                        <FormControlLabel value="Op3" control={<Radio />} label="Option 3" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid xs={12} item>
                                <Button type='submit' variant="contained" color='primary' fullWidth>Send</Button>
                            </Grid>


                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div >
    )
}

export default App;