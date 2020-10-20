import React from 'react'
import "./index.css"

export default function IssueHeader() {
return <div className="issue-header" style={{ backgroundColor: '#080808',
color: '#84001C'}}>
    <h6 id="issue-name">Issue</h6>
    <h6 id="stance-name">Stance
    </h6>
    <h6 id="important-name">Important</h6>
</div>
}