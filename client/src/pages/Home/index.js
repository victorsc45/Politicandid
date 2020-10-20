import React, { useEffect, useState } from 'react';

import API from "../../utils/API";
import "./index.css";
import VoterInfoBlock from "../../components/VoterInfoBlock/index";
import VoterIssueBlock from "../../components/VoterIssueBlock/index";
import CandidateInfoBlock from "../../components/CandidateInfoBlock/index";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { UPDATE_ALL_DATA } from '../../store/actions';
import constitHires from '../../components/images/constitHires.jpg';

// import { useStoreContext } from '../../store/store';
// import { StoreProvider } from "../../store/store";
import { useStoreContext } from '../../store/store';

function Home(props) {
  console.log("Home Component Props", props.state)
  // const data = API.getFakeData();

  const [state, dispatch] = useStoreContext();
  const [comp, setComp] = React.useState(true);

  const reRender = () => {
    setComp(!comp);
  }

  return (

    
      <div className="backgroundImage"
       style={{
              background: `url(${constitHires})`,
            }}
    >...
      <div id="home-container">
        <Card >
          <CardContent>
            <VoterInfoBlock reRender={reRender} userData={state.userData} />
          </CardContent>

          {state.candidateData.candidate ? (<CardContent>
            <CandidateInfoBlock reRender={reRender} candidateData={state.candidateData.campaign} />
          </CardContent>) : ""}

          <CardContent>
            <VoterIssueBlock reRender={reRender} issuesData={state.issuesData} />
          </CardContent>
        </Card>
      </div>

    </div>)
};


export default Home;