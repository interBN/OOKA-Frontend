import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
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
                    <Typography gutterBottom color="textSecondary" variant='body2' component="p">
                        Lorem ipsum dolor sit amet.
                    </Typography>

                    <form>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={6} item>
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
                            </Grid>
                            <Grid xs={12} item>
                                <Button type='submit' variant="contained" color='primary' fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default App;