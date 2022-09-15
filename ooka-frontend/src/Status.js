import * as React from 'react';
import { Typography } from '@mui/material';


import Button from '@mui/material/Button';
import { useCallback } from 'react';
import axios from 'axios';

export default function Status() {
    const [state, setState] = React.useState("?");

    const fetchState = useCallback(async () => {
        await axios.get('http://localhost:8072/analysiscontrol/state').then(resp => {
            console.log(resp.data);
            setState(resp.data);
        });
    }, []);

    const handleClick = useCallback((e) => {
        e.preventDefault()
        fetchState();
    }, [fetchState])

    return (
        <div>
            <Typography gutterBottom variant="h3" align='center'>
                Status: {state}
            </Typography>
            <Button type='submit' variant="contained" color='secondary' fullWidth onClick={handleClick}>Check Status</Button>
        </div>
    );
}
