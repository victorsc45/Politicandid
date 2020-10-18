import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./index.css";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import "./index.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStoreContext } from '../../store/store';
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


export default function VoterInfoBlock(props) {


    const [state, dispatch] = useStoreContext();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardContent>

                <h1 id="user-name">{props.userData.name}</h1>

                {/* Always render */}
                <div id="location-block">
                    <h4>City: {props.userData.city}</h4>
                    <h4>County: {props.userData.county} </h4>
                    <h4>State: {props.userData.state} </h4>
                    <h4>Country: {props.userData.country} </h4>
                </div>

                {/* have a second block with candidate info if the person is a candidate */}

                <CardActions>

                    {/* make this button's wording dependent on if the user is just a voter or a candidate */}
                <button id="voter-button">Voter</button>
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
                 {/* <h1>Voter Info Update form here</h1>
                 <ul>
                     <li>City Update</li>
                     <li>County Update</li>
                     <li>State Update</li>
                     <li>Country Update</li>
                 </ul> */}
                 <VoterForm />

            </Collapse>

            </CardContent>

        </Card>);
}