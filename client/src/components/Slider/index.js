import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./index.css";
import { UPDATE_ISSUES_DATA } from '../../store/actions';
import { useStoreContext } from '../../store/store';


function IssueSlider(props) {
  const { stance, issueName  } = props;
  const [state, dispatch] = useStoreContext();


  const handleChange = (event) => {
    event.preventDefault();
    // console.log("Slider Event", event);
    // console.log("Slider Event Target ", event.target);
    // console.log("Slider Event Target Value ", event.target.getAttribute("aria-valuetext"));
    
    const current_issues = state.issuesData;

    // UPDATE THIS SECTION
    const new_issues = current_issues.map(issue => {
      if (issue.issue === issueName) {
          issue.stance = event.target.getAttribute("aria-valuetext");
        return issue
      } else {
        return issue
      }
    })
    // ===============

    dispatch({type: UPDATE_ISSUES_DATA, issuesData: new_issues});

  }

  // No Idea how this works, need to find out

  const useStyles = makeStyles({
    root: {
      width: 300,
      margin: 10,
    },
  });

  const classes = useStyles();

  function valuetext(value) {
    return `${value}`;
  }

  // ==========================================

  return (
    <div className={classes.root}>
      <div id="stance-range">
        <p>Against</p>
        <p className="neutral">Neutral</p>
        <p>For</p>
    </div>
      <Slider
        onChange={(event) => handleChange(event)}
        defaultValue={parseInt(props.stance)}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={-10}
        max={10}
      />
    </div>
  );
}

export default IssueSlider;
