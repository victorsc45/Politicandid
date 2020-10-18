import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { lightBlue } from '@material-ui/core/colors';
import "./index.css";


export default function CandidateForm() {

    const userNameRef = useRef();
const cityRef = useRef();
const countyRef = useRef();
const stateRef = useRef();
const countryRef = useRef();
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            color: lightBlue,
        },
    },
}));

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
        <h3>Update Your Candidate Info</h3>

            < div id="form-block">
                <TextField className="outlined-basic" ref={userNameRef} id="position" label="Position" variant="outlined" />
                <br />
                <TextField className="outlined-basic" ref={cityRef} id="body" label="Body" variant="outlined" />
                <br />
                <TextField className="outlined-basic" ref={countyRef} id="level" label="Level" variant="outlined" />
                <br />
            </div>


            <button className="update-info-button">Update Candidate Info</button>
            <br />
            <button className="update-info-button">End Candidacy</button>
            

        </form>
    );
}