// // import React from 'react';
// // import { Link } from "react-router-dom";

// // import CompanyListCntr from '../../pages/Company/CompanyListCntr/CompanyListCntr';
// // import JobListCntr from '../../pages/Job/JobListCntr/JobListCntr';
// // import ConnectionListCntr from "../../pages/Connection/ConnectionListCntr/ConnectionListCntr";

// // import CompanyContainer from '../../pages/Company/CompanyCntr/CompanyCntr'
// // import JobContainer from "../../pages/Job/JobCntr/JobCntr";
// // import ConnectionContainer from "../../pages/Connection/ConnectionCntr/ConnectionCntr";

// // import Company from './Company/Company'

// // import './ApplicationDetails.css';

// // function ApplicationDetails() {
// //   return (
// //     <div className="application-details">
// //       <div className="company">
// //         <section className="company-section">
// //           <div className="section-header">
// //             <h3>Company</h3>
// //             <div className="buttons">
// //               <Link to={`/applicationdetails`}>
// //                 <button>Edit</button>
// //               </Link>
// //               <Link to={`/applicationdetails`}>
// //                 <button>Delete</button>
// //               </Link>
// //             </div>
// //           </div>
// //           {/* <CompanyListCntr /> */}
// //           {/* this above needs to be changed to the container for just one Company */}
// //           <CompanyContainer />
// //         </section>
// //       </div>

// //       <div className="jobs-connections">
// //         <section className="jobs-section">
// //           <div className="section-header">
// //             <h3>Jobs</h3>
// //             <div className="buttons">
// //               <Link to={`/applicationdetails`}>
// //                 <button>Add</button>
// //               </Link>
// //               <Link to={`/applicationdetails`}>
// //                 <button>Edit</button>
// //               </Link>
// //               <Link to={`/applicationdetails`}>
// //                 <button>Delete</button>
// //               </Link>
// //             </div>
// //           </div>
// //           {/* <JobListCntr /> */}
// //           {/* this above needs to be changed to the container for just one Company */}
// //           <JobContainer />
// //           {/* <CompanyContainer
// //             jobs="company.job"
// //             connections="company.connection"
// //           /> */}
// //         </section>

// //         <section className="connections-section">
// //           <div className="section-header">
// //             <h3>Connections</h3>
// //             <div className="buttons">
// //               <Link to={`/applicationdetails`}>
// //                 <button>Add</button>
// //               </Link>
// //               <Link to={`/applicationdetails`}>
// //                 <button>Edit</button>
// //               </Link>
// //               <Link to={`/applicationdetails`}>
// //                 <button>Delete</button>
// //               </Link>
// //             </div>
// //           </div>
// //           {/* <ConnectionListCntr /> */}
// //           {/* this above needs to be changed to the container for just one Company */}
// //           <ConnectionContainer />
// //           {/* <CompanyContainer
// //             jobs="company.job"
// //             connections="company.connection"
// //           /> */}
// //           {/* <Company */}
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ApplicationDetails;









// import React from "react";
// import { Link } from "react-router-dom";

// // import "./Application.css";
// import JobList from "../zApplicationDetails/Job/JobList";
// import Company from "../zApplicationDetails/Company/Company";

// let applicationStatusList = [
//   "Interested",
//   "Applied",
//   "Phone Screen",
//   "Phone Interview",
//   "Test/HW",
//   "In Person/Zoom",
//   "Offer",
//   "Rejected",
//   "No Openings",
// ];

// function Home(props) {
//   console.log(props, "props from HOME");
//   return (
//     <div className="home">
//       <Link to={`/companies`}>
//         <button id="add-new">+ Add New</button>
//       </Link>

//       {/* -----------------------------first row */}
//       <div className="status-cards">
//         <div className="row">
//           {/* A */}
//           <div id="application-status-card">{applicationStatusList[0]}</div>

//           {/* B */}
//           <div className="previous">prev</div>

//           {/* C */}
//           {/* <ApplicationList /> */}
//           <div className="application-card">
//             <section className="application-content-wrapper">
//               <h4>
//                 {/* <JobList jobs={props.job} /> */}
//                 {/* <Company /> */}
//               </h4>
//               <p>software engineer</p>
//               <p>Applied On: 8/20/20</p>
//               <p>Complete Assignment</p>
//               <p>By: 8/22/20</p>
//             </section>
//           </div>

//           {/* D */}
//           <div className="next">next</div>
//         </div>

//         {/* -----------------------------second row */}
//         <div className="row">
//           {/* A */}
//           <div id="application-status-card">{applicationStatusList[1]}</div>

//           {/* B */}
//           <div className="previous">prev</div>

//           {/* C */}
//           {/* <ApplicationList /> */}
//           <div className="application-card">
//             <section className="application-content-wrapper">
//               <h4>
//                 google
//                 {/* <CompanyList /> */}
//               </h4>
//               <p>software engineer</p>
//               <p>Applied On: 8/20/20</p>
//               <p>Complete Assignment</p>
//               <p>By: 8/22/20</p>
//             </section>
//           </div>

//           {/* D */}
//           <div className="next">next</div>
//         </div>

//         {/* -----------------------------second row */}
//         <div className="row">
//           {/* A */}
//           <div id="application-status-card">{applicationStatusList[2]}</div>

//           {/* B */}
//           <div className="previous">prev</div>

//           {/* C */}
//           {/* <ApplicationList /> */}
//           <div className="application-card">
//             <section className="application-content-wrapper">
//               <h4>
//                 google
//                 {/* <CompanyList /> */}
//               </h4>
//               <p>software engineer</p>
//               <p>Applied On: 8/20/20</p>
//               <p>Complete Assignment</p>
//               <p>By: 8/22/20</p>
//             </section>
//           </div>

//           {/* D */}
//           <div className="next">next</div>
//         </div>

//         {/* -----------------------------second row */}
//         <div className="row">
//           {/* A */}
//           <div id="application-status-card">{applicationStatusList[3]}</div>

//           {/* B */}
//           <div className="previous">prev</div>

//           {/* C */}
//           {/* <ApplicationList /> */}
//           <div className="application-card">
//             <section className="application-content-wrapper">
//               <h4>
//                 google
//                 {/* <CompanyList /> */}
//               </h4>
//               <p>software engineer</p>
//               <p>Applied On: 8/20/20</p>
//               <p>Complete Assignment</p>
//               <p>By: 8/22/20</p>
//             </section>
//           </div>

//           {/* D */}
//           <div className="next">next</div>
//         </div>

//         {/* -----------------------------second row */}
//         <div className="row">
//           {/* A */}
//           <div id="application-status-card">{applicationStatusList[4]}</div>

//           {/* B */}
//           <div className="previous">prev</div>

//           {/* C */}
//           {/* <ApplicationList /> */}
//           <div className="application-card">
//             <section className="application-content-wrapper">
//               <h4>
//                 google
//                 {/* <CompanyList /> */}
//               </h4>
//               <p>software engineer</p>
//               <p>Applied On: 8/20/20</p>
//               <p>Complete Assignment</p>
//               <p>By: 8/22/20</p>
//             </section>
//           </div>

//           {/* D */}
//           <div className="next">next</div>
//         </div>

//         {/* -----------------------------second row */}
//         <div className="row">
//           {/* A */}
//           <div id="application-status-card">{applicationStatusList[5]}</div>

//           {/* B */}
//           <div className="previous">prev</div>

//           {/* C */}
//           {/* <ApplicationList /> */}
//           <div className="application-card">
//             <section className="application-content-wrapper">
//               <h4>
//                 google
//                 {/* <CompanyList /> */}
//               </h4>
//               <p>software engineer</p>
//               <p>Applied On: 8/20/20</p>
//               <p>Complete Assignment</p>
//               <p>By: 8/22/20</p>
//             </section>
//           </div>

//           {/* D */}
//           <div className="next">next</div>
//         </div>

//         {/* -----------------------------second row */}
//         <div className="row">
//           {/* A */}
//           <div id="application-status-card">{applicationStatusList[6]}</div>

//           {/* B */}
//           <div className="previous">prev</div>

//           {/* C */}
//           {/* <ApplicationList /> */}
//           <div className="application-card">
//             <section className="application-content-wrapper">
//               <h4>
//                 google
//                 {/* <CompanyList /> */}
//               </h4>
//               <p>software engineer</p>
//               <p>Applied On: 8/20/20</p>
//               <p>Complete Assignment</p>
//               <p>By: 8/22/20</p>
//             </section>
//           </div>

//           {/* D */}
//           <div className="next">next</div>
//         </div>

//         {/* -----------------------------second row */}
//         <div className="row">
//           {/* A */}
//           <div id="application-status-card">{applicationStatusList[7]}</div>

//           {/* B */}
//           <div className="previous">prev</div>

//           {/* C */}
//           {/* <ApplicationList /> */}
//           <div className="application-card">
//             <section className="application-content-wrapper">
//               <h4>
//                 google
//                 {/* <CompanyList /> */}
//               </h4>
//               <p>software engineer</p>
//               <p>Applied On: 8/20/20</p>
//               <p>Complete Assignment</p>
//               <p>By: 8/22/20</p>
//             </section>
//           </div>

//           {/* D */}
//           <div className="next">next</div>
//         </div>

//         {/* -----------------------------second row */}
//         <div className="row">
//           {/* A */}
//           <div id="application-status-card">{applicationStatusList[7]}</div>

//           {/* B */}
//           <div className="previous">prev</div>

//           {/* C */}
//           {/* <ApplicationList /> */}
//           <div className="application-card">
//             <section className="application-content-wrapper">
//               <h4>
//                 google
//                 {/* <CompanyList /> */}
//               </h4>
//               <p>software engineer</p>
//               <p>Applied On: 8/20/20</p>
//               <p>Complete Assignment</p>
//               <p>By: 8/22/20</p>
//             </section>
//           </div>

//           {/* D */}
//           <div className="next">next</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
