import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import "./styles.css";

const faces = [
    "http://i.pravatar.cc/300?img=1",
    "http://i.pravatar.cc/300?img=2",
    "http://i.pravatar.cc/300?img=3",
    "http://i.pravatar.cc/300?img=4"
];

const styles = muiBaseTheme => ({
    card: {
        maxWidth: 300,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%"
    },
    content: {
        textAlign: "left",
        padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
        margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
            marginLeft: -muiBaseTheme.spacing.unit
        }
    }
});

function App({ classes }) {
    return (
        <div className="App">
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={
                        "https://cdn.vox-cdn.com/thumbor/OI8ULB1VpTqL4HmFz0yh1j60WR0=/0x0:2040x1360/1200x675/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/63572227/akrales_190411_3346_0152.0.jpg"
                    }
                />
                <CardContent className={classes.content}>
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                        Mitchell - UserName API
            {/* {voterData[0] ? voterData[0].name : "none"} */}
                    </Typography>

                    {/* <Divider className={classes.divider} light /> */}

                    <Typography
                        className={"MuiTypography--subheading"}
                        variant={"subtitle2"}
                    >

                    </Typography>
                    <Typography
                        className={"MuiTypography--caption"}
                        variant={"caption"}
                    >
                        City
            <br />
            State
            <br />
            USA
          </Typography>


                    <Divider className={classes.divider} light />
                    Import Switches Component and Sliders
                    <br />
                    Link those to userDB
                    <br />
                    {faces.map(face => (
                        <Avatar className={classes.avatar} key={face} src={face} />
                    ))}

                    <Button
                        size="small"
                        disabled
                        variant="contained"
                        color="info">
                        Candidate
            </Button>

                </CardContent>
            </Card>
        </div>
    );
}

const WrappedApp = withStyles(styles)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<WrappedApp />, rootElement);
