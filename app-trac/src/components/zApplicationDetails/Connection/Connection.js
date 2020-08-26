import React from 'react';
import { Link } from "react-router-dom";
import ConnectionModel from '../../../models/connectionModel';


const Connection = (props) => {
  let { connection } = props;
  console.log('props in connection.js =', props)
  return (
    <>
      <div className="buttons">
        <Link to={`/connections/${connection._id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to={`/connections/${connection._id}/delete`}>
          <button>Delete</button>
        </Link>
      </div>
      <div className="content-wrapper-connections">
        {connection.connectionName} -
        <a href={connection.connectionLinkedin} target="_blank">
          {" "}
          LinkedIn{" "}
        </a>
        <br />
        {connection.connectionEmail}
      </div>
    </>
  );
}

export default Connection;


// const BrowserHistory = require("react-router/lib/BrowserHistory").default;

// const App = React.createClass({
//   render: () => {
//     return (
//       <div>
//         <button onClick={BrowserHistory.goBack}>Go Back</button>
//       </div>
//     );
//   },
// });

// React.render(
//   <Router history={BrowserHistory}>
//     <Route path="/" component={App} />
//   </Router>,
//   document.body
// );