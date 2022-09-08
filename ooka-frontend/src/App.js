import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react';


function App() {
    return (
        <div className='App'>
            <Typography gutterBottom variant="h3" align='center'>
                React App
            </Typography>
            <Card style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom variant='h5'>
                        Contact Us
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