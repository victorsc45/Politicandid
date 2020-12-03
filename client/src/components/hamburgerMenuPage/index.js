// import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { LOADING, UNSET_USER } from '../../store/actions';
// // import "./index.css";
// import {
//     MDBNavbar,
//     MDBNavbarBrand,
//     MDBNavbarNav,
//     MDBNavItem,
//     MDBNavLink,
//     MDBNavbarToggler,
//     MDBCollapse,
//     MDBContainer,

// } from 'mdbreact';
// import { useStoreContext } from '../../store/store';
// import { BrowserRouter as Router } from 'react-router-dom';
// // declare react state and dispatch for store file
// const [state, dispatch] = useStoreContext();
// const history = useHistory();
// // logout event and unset user data
// const logout = (event) => {
//     event.preventDefault();

//     dispatch({ type: LOADING });

//     axios
//         .post('/api/users/logout')
//         .then((response) => {
//             if (response.status === 200) {
//                 dispatch({ type: UNSET_USER });
//                 history.replace('/login');
//             }
//         })
//         .catch((error) => {
//             console.log('Logout error');
//         });
// };

// class hamburgerMenuPage extends Component {
//     stateCol = {
//         collapseID: ''
//     };

//     toggleCollapse = collapseID => () => {
//         this.setState(prevState => ({
//             collapseID: prevState.collapseID !== collapseID ? collapseID : ''
//         }));
//     };

//     render() {
//         return (
//             <Router>
//                 <MDBContainer>
//                     <MDBNavbar
//                         color='light-blue lighten-4'
//                         style={{ marginTop: '20px' }}
//                         light
//                     >
//                         <MDBContainer>
//                             <MDBNavbarBrand>PolitiCandid</MDBNavbarBrand>
//                             <MDBNavbarToggler
//                                 onClick={this.toggleCollapse('navbarCollapse1')}
//                             />
//                             <MDBCollapse
//                                 id='navbarCollapse1'
//                                 isOpen={this.stateCol.collapseID}
//                                 navbar
//                             >
//                                 <MDBNavbarNav left>
//                                     {state.user ? (
//                                         <>
//                                             <MDBNavItem active>
//                                                 <MDBNavLink to='/'>Home</MDBNavLink>
//                                             </MDBNavItem>
//                                             <MDBNavItem>
//                                                 <MDBNavLink to='/matchespage'>Matches</MDBNavLink>
//                                             </MDBNavItem>
//                                             <MDBNavItem>
//                                                 <MDBNavLink to='/login'>Logout</MDBNavLink>
//                                             </MDBNavItem>
//                                         </>
//                                     ) : (
//                                             <>
//                                                 <MDBNavItem>
//                                                     <MDBNavLink to='/login'>Login</MDBNavLink>
//                                                 </MDBNavItem>
//                                                 <MDBNavItem>
//                                                     <MDBNavLink to='/signup'>Sign up</MDBNavLink>
//                                                 </MDBNavItem>
//                                             </>
//                                         )}
//                                 </MDBNavbarNav>
//                             </MDBCollapse>
//                         </MDBContainer>
//                     </MDBNavbar>
//                 </MDBContainer >
//             </Router>
//         );
//     }
// }

// export default hamburgerMenuPage;