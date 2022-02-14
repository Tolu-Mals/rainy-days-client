import React, { useState, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Chip from "@mui/material/Chip";

import { BoxButtonList, BoxButton } from "../../Styles/ButtonList.stlyed";

import NewTargetSavings from "./NewTargetSavings";
import TargetSavingsSummary from "./TargetSavingsSummary";


const TargetSavings = () => {

  const history = useHistory();

  const newTargetSavings = () => {
    history.push("target/new");
  };

  return (
    <div className="container">
      <Switch>
        <Route exact path="/dashboard/products/target">
          <BoxButtonList>
            <BoxButton id="new" onClick={newTargetSavings}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0C5.8318 0 0 5.8318 0 13C0 20.1682 5.8318 26 13 26C20.1682 26 26 20.1682 26 13C26 5.8318 20.1682 0 13 0ZM13 24.5556C6.62827 24.5556 1.44444 19.3717 1.44444 13C1.44444 6.62827 6.62827 1.44444 13 1.44444C19.3717 1.44444 24.5556 6.62827 24.5556 13C24.5556 19.3717 19.3717 24.5556 13 24.5556Z"
                  fill="#3779DC"
                />
                <path
                  d="M17.3342 12.2786H13.7231V8.66753C13.7231 8.26858 13.3998 7.94531 13.0009 7.94531C12.6019 7.94531 12.2786 8.26858 12.2786 8.66753V12.2786H8.66753C8.26858 12.2786 7.94531 12.6019 7.94531 13.0009C7.94531 13.3998 8.26858 13.7231 8.66753 13.7231H12.2786V17.3342C12.2786 17.7332 12.6019 18.0564 13.0009 18.0564C13.3998 18.0564 13.7231 17.7332 13.7231 17.3342V13.7231H17.3342C17.7332 13.7231 18.0564 13.3998 18.0564 13.0009C18.0564 12.6019 17.7332 12.2786 17.3342 12.2786Z"
                  fill="#3779DC"
                />
              </svg>
              Create new target savings
            </BoxButton>
            <BoxButton className="target-saving target-saving-blue">
              <div>
                <div className="name">University Tuition</div>
                <Chip label="2.5% interest" color="primary" className="pill" />
              </div>
              <div className="amount">N200,000</div>
              <div className="frequency">N20,000 Per Month</div>
            </BoxButton>
            <BoxButton className="target-saving target-saving-gold">
              <div>
                <div className="name">House Rent</div>
                <Chip label="2.5% interest" color="primary" className="pill" />
              </div>
              <div className="amount">N500,000</div>
              <div className="frequency">N50,000 Per Month</div>
            </BoxButton>
          </BoxButtonList>
        </Route>
        <Route path="/dashboard/products/target/new">
          <NewTargetSavings />
        </Route>
        <Route path="/dashboard/products/target/summary">
        <TargetSavingsSummary />
        </Route>
      </Switch>
    </div>
  );
};

export default TargetSavings;
