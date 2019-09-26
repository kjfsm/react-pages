import queryString from "query-string";
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from "./App";

ReactDOM.render(
    <Router>
      <Route render={ (props) => {
        const qs = queryString.parse(props.location.search);
        const {data, randomData, clearText} = qs;

        return <App
          initialData={data as string}
          initialRandomData={randomData !== undefined ?
                              (typeof randomData) === "string" ?
                                (randomData as string).split("") :
                                (randomData as string[]) :
                            undefined }
          initialClearText={clearText as string}
        />;
      }

      }/>
    </Router>,
  document.getElementById("root"));
