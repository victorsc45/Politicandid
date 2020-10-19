import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { lightBlue } from '@material-ui/core/colors';
import "./index.css";
import { useStoreContext } from '../../store/store';

export default function CandidateForm(props) {
    const [state, dispatch] = useStoreContext();
    const positionRef = useRef();
    const bodyRef = useRef();
    const levelRef = useRef();
    
    const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            color: lightBlue,
        },
    },
}));

const updateInfo = (event) => {
    // console.log("target id", event.target.getAttribute("id"));
    const info = event.target.getAttribute("id");
    const currentInfo = state.candidateData.campaign[info];
    let currentRef; 
    switch (info) {
        case "position":
            currentRef = positionRef;
            break;
        case "body":
            currentRef = bodyRef;
            break; 
        case "level":
            currentRef = levelRef;
            break; 

    }
    const newInfo = currentRef.current.childNodes[1].firstChild.value;
    state.candidateData.campaign[info] = newInfo;
    // console.log("Candidate Data", state.candidateData);
}

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
        <h3>Update Your Candidate Info</h3>

            < div id="form-block">
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={positionRef} id="position" label="Position" placeholder={props.data.position} variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={bodyRef} id="body" label="Body" placeholder={props.data.body} variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={levelRef} id="level" label="Level" placeholder={props.data.level} variant="outlined" />
                <br />
            </div>


            <button className="update-info-button">Update Candidate Info</button>
            <br />
            <button className="update-info-button">End Candidacy</button>
            

        </form>
    );
}