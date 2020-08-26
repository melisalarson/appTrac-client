import React from "react";
import CompanyOverview from "./CompanyOverview";


function CompanyList(props) {
  let companyList = []
  const noCompanies = "no companies?";
  
  if (props.companies) {
    companyList =
    props.companies.map((Obj) => {
      return <CompanyOverview key={Obj._id} company={Obj}/>;
    });
  }
  if (companyList.length <= 0) {
    return noCompanies;
  }
  return <div className="companies-container">{companyList}</div>;

}

export default CompanyList;
