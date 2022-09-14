import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useCallback } from 'react';


export default function SubmitButton({ triggerAPI }) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = useCallback((e) => {
        setOpen(!open);
        e.preventDefault()
        triggerAPI();
    }, [triggerAPI, open])
    return (
        <div>
            <Button type='submit' variant="contained" color='primary' fullWidth onClick={handleSubmit}>Send</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
