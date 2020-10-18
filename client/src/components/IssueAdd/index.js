import React, { useRef } from 'react';
import "./index.css"
import Slider from "../Slider/index";
import { useStoreContext } from '../../store/store';
import { UPDATE_ISSUES_DATA } from '../../store/actions';

export default function IssueAdd() {

    const textRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleNewIssue = (event) => {
        event.preventDefault();
        
        const current_issues = state.issuesData;
        

        // pull out name of issue from textarea
        console.log(textRef);
        const new_issue_name = textRef.current.value;
        current_issues.push({issue: new_issue_name, stance:"0", important: true});
    
        dispatch({type: UPDATE_ISSUES_DATA, issuesData: current_issues});
    
      }

    return <div className="issue-add">
        <div className="issue-name">
            <textarea className="issue-name-area" rows="1" ref={textRef} />
        </div>
        <button id="add-button" onClick={(event)=> {handleNewIssue(event)}}>Add</button>
</div>
}

