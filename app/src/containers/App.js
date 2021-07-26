import React from 'react';
import Main from './Main';
import Billing from './Billing';
import Customers from './Customers';
import DailyLog from './Dailylog';
import Sidebar from './../components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="wrapper">
          <Route exact path="/">
            <Main className="main"/>
          </Route>
          <Switch>
            <Route exact path="/billing">
              <div className="main">
                <Billing/>
              </div>
            </Route>
            <Route exact path="/dailylog">
              <div className="main">
                <DailyLog/>
              </div>
            </Route>
            <Route exact path="/customers">
              <div className="main">
                <Customers/>
              </div>
            </Route>
          </Switch>
        </div>
       </Router>
    </React.Fragment>
  )
};
export default App;