import React from 'react';
import axios from 'axios';
import API from "../../utils/API";
import "./index.css";
import VoterInfoBlock from "../../components/VoterInfoBlock/index";
import VoterIssueBlock from "../../components/VoterIssueBlock/index";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { UPDATE_ALL_DATA } from '../../store/actions';

// import { useStoreContext } from '../../store/store';
// import { StoreProvider } from "../../store/store";
import { useStoreContext } from '../../store/store';

const Home = (props) => {
  console.log("Home Component Props", props.state)
  // const data = API.getFakeData();

  const [state, dispatch] = useStoreContext();

  const handleUpdate = (event) => {
    event.preventDefault();

    console.log("state.issues")

    axios.post("/api/users/update", {username: state.user, issues: state.issuesData});
    // .then((response) => {
    //   if (response.data.username) {
    //     dispatch({type: UPDATE_ALL_DATA, 
    //       user: response.data.username, 
    //       userData: response.data.userData,
    //       issuesData: response.data.issuesData,
    //       candidateData: response.data.candidateData,})
    //     console.log("Update Database with new issues");
    //   }
    // })

    // .catch((error) => {
    //   console.log('login error: ');
    //   console.log(error);
    // });
  }

  return (<div id="home-container">

    <Card >
      <CardContent>
        <VoterInfoBlock userData={props.state.userData} candidateData={props.state.candidateData} />
      </CardContent>
      <CardContent>

        <VoterIssueBlock issuesData={props.state.issuesData} />
        <button onClick={(event)=>handleUpdate(event)}>Update</button>

      </CardContent>
    </Card>

  </div>)
};


export default Home;