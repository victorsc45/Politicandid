// import required dependecies and css styings for adding issues component
import React, { useRef } from 'react';
import "./index.css"
import Slider from "../Slider/index";
import { useStoreContext } from '../../store/store';
import { UPDATE_ISSUES_DATA } from '../../store/actions';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// exporting component to standardized drop-down menu that users can choose from 
export default function IssueAdd() {
    // list of hot button topics on the list
    const issueList = [
        { title: "Net Neutrality" },
        { title: "Defunding the Police" },
        { title: "Adding Supreme Court Judges" },
        { title: "2nd Amendment Rights" },
        { title: "Gun Control" },
        { title: "Southern Border Wall" },
        { title: "Government COVID Response" },
        { title: "Right to Work Laws" },
        { title: "Labor Unions" },
        { title: "Federal COVID Stimulus Money" },
        { title: "Government Bailouts" },
        { title: "Term Limits" },
        { title: "Decriminalization of Cannabis" },
        { title: "Arming Teachers" },
    ]

    const textRef = useRef();
    const dropDownRef = useRef();
    const [state, dispatch] = useStoreContext();
    // event handler for issues drop-down when selected and button has an onClick event
    const handleNewIssue = (event) => {
        event.preventDefault();

        const current_issues = state.issuesData;
        var element = document.getElementById("combo-box-demo");
        console.log("Element Value", element.value)


        // pull out name of issue from textarea
        // console.log(textRef);
        // const new_issue_name = textRef.current.value;
        current_issues.push({ issue: element.value, stance: "0", important: true });

        dispatch({ type: UPDATE_ISSUES_DATA, issuesData: current_issues });

    }

    return <div className="issue-add">
        {/* autocomplete is part of this material ui component */}
        <Autocomplete
            id="combo-box-demo"
            ref={dropDownRef}
            options={issueList}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Issues" variant="outlined" />}
        />

        <button id="add-button" onClick={(event) => { handleNewIssue(event) }}>Add</button>
    </div>
}

