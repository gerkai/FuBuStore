import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./App.scss";
import store from "./redux-toolkit/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
  <HashRouter hashType="hashbang">
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  </React.Fragment>
);
