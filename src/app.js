import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const expensifyComp = () => <div>Hello from a route</div>;
const AddExpencePage = () => <div>Hello from a create route</div>;
const EditExpencePage = () => <div>Hello from a edit route</div>;
const HelpExpencePage = () => <div>Hello from a help route</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={expensifyComp} exact={true} />
      <Route path="/create" component={AddExpencePage} />
      <Route path="/edit" component={EditExpencePage} />
      <Route path="/help" component={HelpExpencePage} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));
