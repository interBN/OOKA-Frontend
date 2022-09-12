import { Button, Card, CardContent, Alert, Grid, Typography, FormControl, Radio, FormControlLabel, RadioGroup, FormLabel } from '@mui/material';
import React from 'react';
import "./App.css";
import logo from "./logo.svg";
import { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';



const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);

function MyFormControlLabel(props) {
    //   {/* <Grid xs={12} sm={6} item>
    //                             <TextField label="First Name" placeholder='Please enter first name' variant='outlined' fullWidth required />
    //                         </Grid>
    //                         <Grid xs={12} sm={6} item>
    //                             <TextField label="Last Name" placeholder='Please enter last name' variant='outlined' fullWidth required />
    //                         </Grid>
    //                         <Grid xs={12} item>
    //                             <TextField type="email" label="Email" placeholder='Please enter email' variant='outlined' fullWidth required />
    //                         </Grid>
    //                         <Grid xs={12} item>
    //                             <TextField type="number" label="Phone" placeholder='Please enter phone' variant='outlined' fullWidth required />
    //                         </Grid>
    //                         <Grid xs={12} item>
    //                             <TextField label="Message" multiline rows={8} placeholder='Type message' variant='outlined' fullWidth required />
    //                         </Grid> */}
    const radioGroup = useRadioGroup();
    let checked = false;
    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }
    return <StyledFormControlLabel checked={checked} {...props} />;
}


function App() {
    return (
        <div className='App'>

            <Alert variant="filled" severity="info" onClose={() => { }}>This is an info alert — check it out!</Alert>
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
                            <Grid xs={12} item>
                                <Typography gutterBottom color="textSecondary" variant='body2' component="p">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                </Typography>
                            </Grid>

                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="startingSystem">Starting System</FormLabel>
                                    <RadioGroup row name="startingSystem" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="auxiliaryPTO">Auxiliary PTO</FormLabel>
                                    <RadioGroup row name="auxiliaryPTO" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="oilSystem">Oil System</FormLabel>
                                    <RadioGroup row name="oilSystem" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="fuelSystem">Fuel System</FormLabel>
                                    <RadioGroup row name="fuelSystem" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="coolingSystem">Cooling System</FormLabel>
                                    <RadioGroup row name="coolingSystem" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="exhaustSystem">Exhaust System</FormLabel>
                                    <RadioGroup row name="exhaustSystem" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="mountingSystem">Mounting System</FormLabel>
                                    <RadioGroup row name="mountingSystem" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="engineManagementSystem">Engine ManagementSystem</FormLabel>
                                    <RadioGroup row name="engineManagementSystem" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="monitoringSystem">Monitoring System</FormLabel>
                                    <RadioGroup row name="monitoringSystem" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="powerTransmission">Power Transmission</FormLabel>
                                    <RadioGroup row name="powerTransmission" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <FormControl>
                                    <FormLabel id="gearbox">Gearbox</FormLabel>
                                    <RadioGroup row name="gearbox" defaultValue="Op1">
                                        <MyFormControlLabel value="Op1" label="Option 1" control={<Radio />} />
                                        <MyFormControlLabel value="Op2" label="Option 2" control={<Radio />} />
                                        <MyFormControlLabel value="Op3" label="Option 3" control={<Radio />} />
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