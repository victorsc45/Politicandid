import React from 'react';
import {NavLink} from 'react-router-dom';
import "./index.css";
import axios from 'axios';

export default function FollowerRow(props) {

    return (
        <div onClick={(e) => {props.setNewProfile(e,props.follower)}} class="follower-row">
            <span>{props.follower}</span>
        </div>
    )
}