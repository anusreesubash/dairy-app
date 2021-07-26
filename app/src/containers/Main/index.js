import React from 'react';
import StyledWrapper from './StyledWrapper';
import { NavLink, useParams } from 'react-router-dom';

const Main = () => {
	return (
    <StyledWrapper>
      <div className="header">
        <h1>Anusree's Dairy Farm</h1>
      </div>
      <div className="main-container">
        <NavLink exact to="/billing">
          <button className="btn"> Billing </button>
        </NavLink>
        <NavLink exact to="/dailylog">
          <button className="btn"> Daily Log </button>
        </NavLink>
        <NavLink exact to="/customers">
          <button className="btn"> Customers </button>
        </NavLink>
        <button className="btn"> Reports </button>
        <button className="btn"> Inventory </button>
      </div>
    </StyledWrapper>
	)
}

export default Main;
