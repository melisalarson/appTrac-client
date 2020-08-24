import React from "react";
import Company from "../zApplicationDetails/Company/Company";

function ApplicationList(props) {
  let companiesList = props.companies.map((Obj) => {
    return <Company key={Obj._id} company={Obj} />;
  });
  // console.log("#3 Obj from applicationList.js = ", companiesList);

  return <div className="companies-container">{companiesList}</div>;
}

export default ApplicationList;
