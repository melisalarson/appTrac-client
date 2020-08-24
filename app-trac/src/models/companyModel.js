const url = `http://localhost:4004/companies`;


class CompanyModel {
  static getAllCompanies = () => {
    return fetch(url).then((response) => response.json());
  };

  static getCompanyById = (companyId) => {
    return fetch(`${url}/${companyId}`).then((response) => response.json());
  };
}

export default CompanyModel;
