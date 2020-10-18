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

  console.log("Home Component Props", props.state)
  // const data = API.getFakeData();

  return (<div id="home-container">

    <Card >
      <CardContent>
        <VoterInfoBlock userData={props.state.userData} candidateData={props.state.candidateData} />
      </CardContent>
      <CardContent>

        <VoterIssueBlock issuesData={props.state.issuesData} />

      </CardContent>
    </Card>

  </div>)
};


export default Home;