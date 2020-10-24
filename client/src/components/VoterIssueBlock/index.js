import React from 'react';
import "./index.css";
import IssueRow from "../IssueRow/index";
import IssueHeader from "../../components/IssueHeader";
import IssueAdd from "../../components/IssueAdd";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import "./index.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStoreContext } from '../../store/store';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },  
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


export default function VoterValuesBlock(props) {
    // console.log("VoterValuesBlock Props:", props.issues)

    const [state, dispatch] = useStoreContext();

    const handleUpdate = (event) => {
        event.preventDefault();
        const body = {
            username: state.user, 
            userData: state.userData,
            issuesData: state.issuesData,
            candidateData: state.candidateData
        }
        axios.post("/api/users/update", body)
        .then(response => {console.log(response)});
    }


    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card>
            <CardActions>
            <h1 id="issues">Issues</h1>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                 <div id="issues-container">
                
                <div id="issues-grid">
                    {/* <IssueHeader /> */}
                    <IssueAdd />
                    {props.issuesData.map(issue => {
                    return <IssueRow key={issue.issue} issueData={issue} />
                    })}
                </div>
            <button id="update-button" onClick={(event)=>handleUpdate(event)}>Update</button>
            </div>
            </Collapse>


        </Card>
    );
}

