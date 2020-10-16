import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MatchesPage = () => {
    return (
        <div>
            <ul>
                <li> {voterData[0] ? voterData[0].name : "none"} </li>
                <li> {voterData[1] ? voterData[1].name : "none"} </li>
            </ul>
        </div>
    )
};
export default MatchesPage;