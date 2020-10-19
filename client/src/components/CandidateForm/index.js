import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { lightBlue } from '@material-ui/core/colors';
import "./index.css";
import { useStoreContext } from '../../store/store';
import axios from "axios";

export default function CandidateForm(props) {
    const [state, dispatch] = useStoreContext();
    const officeRef = useRef();
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
        case "office":
            currentRef = officeRef;
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

    const handleUpdate = (event) => {
        if (event) {
            event.preventDefault();
        }
        const body = {
            username: state.user, 
            userData: state.userData,
            issuesData: state.issuesData,
            candidateData: state.candidateData
        }
        axios.post("/api/users/update", body)
        .then(response => {console.log(response)});
    }

    const removeCandidate = (event) => {
        if (event) {
            event.preventDefault();
        }
        state.candidateData.candidate = false; 
        state.candidateData.campaign = {office: null, body: null, level: null};
        console.log("User is now a Candidate", state.candidateData.candidate)
        handleUpdate();
        props.reRender();
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
        <h3>Update Your Candidate Info</h3>

            < div id="form-block">
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={officeRef} id="office" label="Office" placeholder={props.data.office} variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={bodyRef} id="body" label="Body" placeholder={props.data.body} variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => {updateInfo(event)}} ref={levelRef} id="level" label="Level" placeholder={props.data.level} variant="outlined" />
                <br />
            </div>


            <button onClick = {(event)=> handleUpdate(event)} className="update-info-button">Update Candidate Info</button>
            <br />
            <button onClick={(event)=>removeCandidate(event)}className="update-info-button">End Candidacy</button>
            

        </form>
    );
}