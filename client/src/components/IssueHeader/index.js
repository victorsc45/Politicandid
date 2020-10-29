// import react dependency and styling for issue form header
import React from 'react'
import "./index.css"
// export function issue header component
export default function IssueHeader() {
    return <div className="issue-header">
        <h6 id="issue-name">Issue</h6>
        <h6 id="stance-name">Stance
    </h6>
        <h6 id="important-name">Important</h6>
    </div>
}