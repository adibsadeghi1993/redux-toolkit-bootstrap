import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"


ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
