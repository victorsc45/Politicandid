// import required dependencies
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// import styling for candidateinfoblock component
import "./index.css";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStoreContext } from '../../store/store';
import CandidateForm from "../CandidateForm/index";

// theme styles for the candidate info block component
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

// exporting the function candidateinfoblock and props
export default function CandidateInfoBlock(props) {

    // declaring the state and dispatch for store file // declare getter expanded and setter setExpanded
    const [state, dispatch] = useStoreContext();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    //  click handler for expansion of the candidate form area
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // returning the card and card components set by props drilling for candidate information
    return (
        <Card>
            <CardContent>

                <div id="candidate-block">
                    <h4>Office: {props.candidateData.office} </h4>
                    <h4>Body: {props.candidateData.body}</h4>
                    <h4>Level: {props.candidateData.level}</h4>
                </div>



                <CardActions>

                    <button id="voter-button">Candidate</button>
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
                {/* collapsing candidate block and rerendering with current candidate data */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CandidateForm reRender={props.reRender} data={props.candidateData} />

                </Collapse>

            </CardContent>

        </Card>);
}