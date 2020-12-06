// import dependencies and stylings
import React from 'react';
import "./index.css";
import VoterInfoBlock from "../../components/VoterInfoBlock/index";
import VoterIssueBlock from "../../components/VoterIssueBlock/index";
import CandidateInfoBlock from "../../components/CandidateInfoBlock/index";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useStoreContext } from '../../store/store';
// import WithWidth from '../../components/WithWidth';
// function for Home page and passing props
function Home(props) {
  //console.log("Home Component Props", props.state)
  // const data = API.getFakeData();
  // declare state for context in store file
  const [state, dispatch] = useStoreContext();
  // declare comp getter and setter setComp as boolean true
  const [comp, setComp] = React.useState(true);

  // rerender based on function passed false
  const reRender = () => {
    setComp(!comp);
  }
  // return by ternary operation card based on candidacy rendering the view of user voter or candidate
  // pass user data, candidate data, and issues data by state
  return (<div id="home-container">
    <Card >
      {/* <WithWidth /> */}
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

  </div>)
};


export default Home;