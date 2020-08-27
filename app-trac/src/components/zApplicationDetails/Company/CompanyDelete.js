import React from "react";

import CompanyModel from "../../../models/companyModel";


const CompanyDelete = (props) => {
  let goBack = () => props.history.goBack();
  let goHome = () => props.history.push('/companies');

  let companyId = props.match.params.id
  console.log(props)
  console.log(props.match.params.id);
  return (
    // <div>hello from compdelete.js</div>
    <div className="">
      Are you sure you want to delete this Company?
      <br />
      <button onClick={goBack}>Back</button>
      <button onClick={() => CompanyModel.deleteCompany(companyId).then(goHome)}>Delete</button>
    </div>
  );
};

export default CompanyDelete;
