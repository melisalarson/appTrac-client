// import React from 'react';
// import { Link } from "react-router-dom";

// // import CompanyModel from '../../../models/companyModel';
// // import JobModel from "../../../models/jobModel";
// import ConnectionModel from "../../../models/connectionModel";

// import JobList from '../Job/JobList'
// import ConnectionList from "../Connection/ConnectionList";

// import '../../zApplicationDetails/ApplicationDetails.css'

// const Company = (props) => {
//   let { company } = props;
//   // console.log("props in company.js =", props);


//   return (
//     <div className="application-details">
//       {/* company----------------------------------- start */}
//       <div className="company">
//         <section className="company-section">
//           <div className="section-header">
//             <h3>Company</h3>

//             <div className="buttons">
//               <Link to={`/companies/${company._id}/edit`}>
//                 <button>Edit</button>
//               </Link>
//               <Link to={`/`}>
//                 <button>
//                   {/* <button onClick={CompanyModel.deleteCompany(company._id)}> */}
//                   Delete
//                 </button>
//               </Link>
//             </div>
//           </div>

//           <div className="content-wrapper-companies">
//             <section className="company-overview">
//               <a href={company.companyWebsite} target="_blank"> {company.companyName} </a> | 
//               <a href={company.companyCareersPage} target="_blank"> Careers </a> | 
//               <a href={company.companyLinkedin}> Linkedin </a> <br />
//               Employees: {company.employeeCount} <br />
//               HQ: {company.companyHQ} <br/>
//               <a href={company.companyGlassdoor}> Glassdoor </a> - {company.glassdoorScore}
//             </section>
//             <section className="linkedin">
//             </section>
//             <section className="glassdoor">
//             </section>
//           </div>
//         </section>
//       </div>

//       <div className="jobs-connections">
//         {/* job----------------------------------- start */}
//         <section className="jobs-section">
//           <div className="section-header">
//             <h3>Jobs</h3>
//             <div className="buttons">
//               <Link to={`/companies/${company._id}/edit`}>
//                 <button>Add</button>
//               </Link>
//               <Link to={`/companies/${company._id}/edit`}>
//                 <button>Edit</button>
//               </Link>
//               <Link to={`/companies/${company._id}`}>
//                 <button>
//                   {/* <button onClick={CompanyModel.deleteJob(company._id.job._id)}> */}
//                   Delete
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <JobList jobs={props.job} />
//         </section>

//         {/* job----------------------------------- start */}
//         <section className="connections-section">
//           <div className="section-header">
//             <h3>Connections</h3>
//             <div className="buttons">
//               <Link to={`/companies/${company._id}`}>
//                 <button onClick={ConnectionModel.createConnection()}>Add</button>
//               </Link>
//               <Link to={`/companies/${company._id}/edit`}>
//                 <button>Edit</button>
//               </Link>
//               <Link to={`/companies/${company._id}`}>
//                 <button>Delete</button>
//               </Link>
//             </div>
//           </div>
//           <ConnectionList connections={props.connection} />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Company;
