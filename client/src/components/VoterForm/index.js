import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { lightBlue } from '@material-ui/core/colors';
import "./index.css";


export default function VoterForm(props) {

    console.log("VoterForm props:",props);

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
        <h3>Update Your Voter Info</h3>

            < div id="form-block">
                <TextField className="outlined-basic" ref={userNameRef}  placeholder={props.data.name} id="user-name" label="Name" variant="outlined" />
                <br />
                <TextField className="outlined-basic" ref={cityRef} placeholder={props.data.city} id="city" label="City" variant="outlined" />
                <br />
                <TextField className="outlined-basic" ref={countyRef} placeholder={props.data.county} id="county" label="County" variant="outlined" />
                <br />
                <TextField className="outlined-basic" ref={stateRef} placeholder={props.data.state} id="state" label="State" variant="outlined" />
                <br />
                <TextField className="outlined-basic" ref={countryRef} placeholder={props.data.country} id="country" label="Country" variant="outlined" />
                <br />
            </div>


            <button className="update-info-button">Update Voter Info</button>
            <br />
            <button className="update-info-button">Add Candidacy</button>
            <br />
            <button className="update-info-button">Delete Account</button>

        </form>
    );
}