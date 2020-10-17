import React from 'react';
import API from "../../utils/API";
import "./index.css";
import VoterInfoBlock from "../../components/VoterInfoBlock/index";
import VoterIssueBlock from "../../components/VoterIssueBlock/index";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// import { useStoreContext } from '../../store/store';
// import { StoreProvider } from "../../store/store";

const Home = (props) => {
  // const [state, dispatch] = useStoreContext();
  console.log("Home Props", props.state.data)
  // const data = API.getFakeData();
  return (<div id="home-container">

    <Card >
      <CardContent>
        <VoterInfoBlock info={props.state.data} />
      </CardContent>
      <CardContent>

        <VoterIssueBlock issues={props.state.data} />

      </CardContent>
    </Card>

  </div>)
};


export default Home;