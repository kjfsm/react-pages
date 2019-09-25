import queryString from "query-string";
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <Router>
      <Route render={ (props) =>
        <App qs={queryString.parse(props.location.search)}/>
      }/>
    </Router>,
  document.getElementById("root"));
