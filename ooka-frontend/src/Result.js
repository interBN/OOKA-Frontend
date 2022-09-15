import * as React from 'react';
import { Typography } from '@mui/material';


import Button from '@mui/material/Button';
import { useCallback } from 'react';
import axios from 'axios';

export default function Result() {
    const [result, setResult] = React.useState("?");

    const fetchState = useCallback(async () => {
        await axios.get('http://localhost:8072/analysiscontrol/result').then(resp => {
            console.log(resp.data);
            setResult(resp.data);
        });
    }, []);

    const handleClick = useCallback((e) => {
        e.preventDefault()
        fetchState();
    }, [fetchState])

    return (
        <div>
            <Typography gutterBottom variant="h3" align='center'>
                Result: {result === '' ? '?' : result}
            </Typography>
            <Button type='submit' variant="contained" color='success' fullWidth onClick={handleClick}>Check Result</Button>
        </div>
    );
}
