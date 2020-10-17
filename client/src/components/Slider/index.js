import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./index.css";

function IssueSlider(props) {


  // No Idea how this works, need to find out

  const useStyles = makeStyles({
    root: {
      width: 300,
      margin: 10,
    },
  });

  const classes = useStyles();

  function valuetext(value) {
    return `${value}°C`;
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
