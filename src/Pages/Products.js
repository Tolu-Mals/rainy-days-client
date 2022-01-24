import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { TabContainer } from "../Styles/Tabs.styled";
import TargetSavings from "../Pages/TargetSavings";
import Loans from "../Pages/Loans";

const Products = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const changeRoute = (route) => {
  history.push(route);
}

  return (
    <div>
      <TabContainer>
        <Box>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              aria-label="full width tabs example"
            >
              <Tab label="Target Savings" onClick={() => changeRoute("/dashboard/products/target")} />
              <Tab label="Loans" onClick={() => changeRoute("/dashboard/products/loans")} />
              <Tab label="Investments"  />
            </Tabs>
          </AppBar>
          <Switch>
            <Route path="/dashboard/products/target">
              <TargetSavings />
            </Route>
          </Switch>
        </Box>
      </TabContainer>
    </div>
  );
};

export default Products;
