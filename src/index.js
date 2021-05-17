import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxStore from "./store/reduxStore";
import App from "../src/component/landing";
import * as serviceWorker from "./serviceWorker";
import "./content/style/generalCss.scss";
import "./content/style/bootstrap.min.css";
import "./content/style/font-awesome.min.css";
import "./content/style/font-awesome.min.css";

ReactDOM.render(
  <Provider store={reduxStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
