import React from "react";
import Company from "./Company";


function CompanyList(props) {
  let companiesList = props.companies.map((Obj) => {
    return <Company key={Obj._id} company={Obj}/>;
  });
  console.log("#3 Obj from companyList.js = ", companiesList);

  return <div className="companies-container">{companiesList}</div>;
}

export default CompanyList;
