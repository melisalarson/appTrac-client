import axios from "axios";

const deploy = `https://app-trac-m.herokuapp.com/auth`
const local = `http://localhost:4004/auth`;
const url = local;
// const url = deploy;

class UserModel {
  static getAllUsers = () => {
    return fetch(url)
      .then((response) => response.json())
  }

  static login = (user) => {
    return axios.post(`${url}/login`, user)
    // .then((response) => response.json())
  }

  static createUser = (user) => {
    return axios.post(`${url}/register`, user);
  }

  static verifyUser = (user) => {
    return fetch(`${url}/verify`, user)
      .then((response) => response.json())
  }
}

export default UserModel;