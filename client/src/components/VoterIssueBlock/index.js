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


const useStyles = makeStyles((theme) => ({

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
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

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card>
            <CardActions>
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

            <h1>Issues</h1>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <div id="issues-container">
                    <div id="issues-grid">
                        <IssueHeader />
                        {props.issues.map(issue => {
                            return <IssueRow key={issue.issue} issue={issue} />
                        })}
                        <IssueAdd />
                    </div>
                </div>

            </Collapse>

        </Card>
    );
}

