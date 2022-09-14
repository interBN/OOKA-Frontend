import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useCallback, useState, useEffect, useRef } from 'react';


export default function SubmitButton({ triggerAPI }) {
    const [open, setOpen] = React.useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false)

    const handleClose = () => {
        setOpen(false);
        setBtnDisabled(false);
    };
    const handleSubmit = useCallback((e) => {
        setOpen(!open);
        e.preventDefault()
        triggerAPI();
        setBtnDisabled(true);
    }, [triggerAPI, open])

    // useInterval(() => {
    //     callMyApi()
    // }, 1000);


    // function callMyApi() {
    //     console.log("Bla");
    // }

    // function useInterval(callback, delay) {
    //     const savedCallback = useRef();
    //     useEffect(() => {
    //         savedCallback.current = callback;
    //     }, [callback]);
    //     useEffect(() => {
    //         function tick() {
    //             savedCallback.current();
    //         }
    //         if (delay !== null) {
    //             let id = setInterval(tick, delay);
    //             return () => clearInterval(id);
    //         }
    //     }, [delay]);
    // }

    return (
        <div>
            <Button disabled={btnDisabled} type='submit' variant="contained" color='primary' fullWidth onClick={handleSubmit}>Send</Button>
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
