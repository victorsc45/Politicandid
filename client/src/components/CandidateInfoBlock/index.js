import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./index.css";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStoreContext } from '../../store/store';
import CandidateForm from "../CandidateForm/index";
import axios from 'axios';
import VoterForm from "../VoterForm/index";

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


export default function CandidateInfoBlock(props) {


    const [state, dispatch] = useStoreContext();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CandidateForm data={props.candidateData} />

            </Collapse>

            </CardContent>

        </Card>);
}