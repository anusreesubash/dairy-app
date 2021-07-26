import React from 'react';
import StyledWrapper from './StyledWrapper';
import { NavLink, useParams } from 'react-router-dom';

const Billing = () => {
  return (
    <StyledWrapper>
      <div className="header">
        <h1>Billing</h1>
      </div>
      <div className="main-container">
        <NavLink exact to="/billing/received">
          <button className="btn"> Received </button>
        </NavLink>
        <NavLink exact to="/billing/due">
          <button className="btn"> Bills due </button>
        </NavLink>
        <NavLink exact to="/billing/history">
          <button className="btn"> History </button>
        </NavLink>
      </div>
    </StyledWrapper>
  )
}

export default Billing;
