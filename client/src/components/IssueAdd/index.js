import React from 'react'
import "./index.css"
import Slider from "../Slider/index";

export default function IssueAdd() {
    return <div className="issue-add">
        <div className="issue-name">
            <textarea className="issue-name-area" rows="1" />
        </div>
        <Slider stance={"0"} />
        <button id="add-button">Add</button>
</div>
}

