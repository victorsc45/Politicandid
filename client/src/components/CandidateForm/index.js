// import required dependencies for react components and packages
import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { lightBlue } from '@material-ui/core/colors';
// import styling for candidate form
import "./index.css";
import { useStoreContext } from '../../store/store';
import axios from "axios";

// export the function of component candidate form with props
export default function CandidateForm(props) {
    // declare react state and prepare dispatch to store file
    const [state, dispatch] = useStoreContext();
    // declare use ref react inputs from form
    const officeRef = useRef();
    const bodyRef = useRef();
    const levelRef = useRef();
    // inject a a style theme for form classes
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
                color: lightBlue,
            },
        },
    }));
    // update event handler using switch/case based on user input of useRef
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
    // update event handler for updating user,issue, and candidate data
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
        // post update on api route of user in the routes / users 
        axios.post("/api/users/update", body)
            .then(response => { console.log(response) });
    }
    // event handler to remove a condidate and unset that data
    const removeCandidate = (event) => {
        if (event) {
            event.preventDefault();
        }
        state.candidateData.candidate = false;
        state.candidateData.campaign = { office: null, body: null, level: null };
        console.log("User is now a Candidate", state.candidateData.candidate)
        handleUpdate();
        props.reRender();
    }
    // update candidate page by useRef in textfield components
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h3>Update Your Candidate Info</h3>

            < div id="form-block">
                <TextField className="outlined-basic" onChange={(event) => { updateInfo(event) }} ref={officeRef} id="office" label="Office" placeholder={props.data.office} variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => { updateInfo(event) }} ref={bodyRef} id="body" label="Body" placeholder={props.data.body} variant="outlined" />
                <br />
                <TextField className="outlined-basic" onChange={(event) => { updateInfo(event) }} ref={levelRef} id="level" label="Level" placeholder={props.data.level} variant="outlined" />
                <br />
            </div>


            <button onClick={(event) => handleUpdate(event)} className="update-info-button">Update Candidate Info</button>
            <br />
            <button onClick={(event) => removeCandidate(event)} className="update-info-button">End Candidacy</button>


        </form>
    );
}