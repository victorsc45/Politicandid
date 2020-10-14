import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  
  function valuetext(value) {
    return `${value}°C`;
  }
  
  export default function DiscreteSlider() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Temperature
        </Typography>
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Typography id="discrete-slider" gutterBottom>
          Disabled
        </Typography>
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          disabled
        />
      </div>
    );
  }












// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
// import Input from '@material-ui/core/Input';


// const useStyles = makeStyles({
//   root: {
//     width: 250,
//   },
//   input: {
//     width: 42,
//   },
// });

// export default function InputSlider() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(30);

//   const handleSliderChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleInputChange = (event) => {
//     setValue(event.target.value === '' ? '' : Number(event.target.value));
//   };

//   const handleBlur = () => {
//     if (value < 0) {
//       setValue(0);
//     } else if (value > 0) {
//       setValue(0);
//     }
//   };

//   return (
//     <div className={classes.root}>
//       <Typography id="input-slider" gutterBottom>
//         Set a range for your stance
//       </Typography>
//       <Grid container spacing={2} alignItems="center">
//         <Grid item>
       
//         </Grid>
//         <Grid item xs>
//           <Slider
//             value={typeof value === 'number' ? value : 0}
//             onChange={handleSliderChange}
//             aria-labelledby="input-slider"
//           />
//         </Grid>
//         <Grid item>
//           <Input
//             className={classes.input}
//             value={value}
//             margin="dense"
//             onChange={handleInputChange}
//             onBlur={handleBlur}
//             inputProps={{
//               step: 1,
//               min: -5,
//               max: 5,
//               type: 'number',
//               'aria-labelledby': 'input-slider',
//             }}
//           />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
