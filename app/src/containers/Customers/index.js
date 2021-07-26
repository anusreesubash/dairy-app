import React, { useState } from 'react';
import './index.css'; 
import Modal from '../../components/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';

const Customers = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  
	return (
  	<div className="customers-container">
      <div className="customers-navbar">
        <div className="navbar-item"> 
          <NavLink to="/customers/home"> 
            <FontAwesomeIcon className="icon" size="lg" icon={faHome}/> <span> Home </span>
          </NavLink>
        </div>
        <div className="navbar-item" onClick={() => setOpenAddModal(true)}>
            <FontAwesomeIcon className="icon" size="lg" icon={faPlus}/><span> Add </span> 
        </div>
        <div className="navbar-item">
          <NavLink to="/customers/all" className="menuitem">
            <FontAwesomeIcon className="icon" size="lg" icon={faUser}/><span> All </span> 
          </NavLink>
        </div>
      </div>
      <div>
        {openAddModal && (
          <Modal handleClose={() => setOpenAddModal(false)} title="New Customer" size="md">
            <div className="form">
              <div className="form-item-row">
                <label>Name</label>
                <input id="text-input" className="ml-4"></input> 
              </div>
              <div className="form-item">
                <label>Select Item</label>
                <div className="btn-div">
                  <button className="btn">Milk</button>
                  <button className="btn">Curd</button>
                  <button className="btn">Buttermilk</button>
                  <button className="btn">Ghee</button>
                  <button className="btn">Butter</button>
                </div>
              </div>
              <div className="form-item">
                <label>Time</label>
                <div className="btn-div">
                  <button className="btn">AM</button>
                  <button className="btn">PM</button>
                </div>
              </div>
              <div className="form-item">
                <label>Quantity</label>
                <div style={{display: 'flex', flexDirection: 'column'}}> 
                  <div>
                    <input id="text-input" type="number"></input>
                    <button className="btn">L</button>
                    <button className="btn">ML</button>
                  </div>
                  <div className="btn-div">
                    <button className="btn">1 L</button>
                    <button className="btn">500 ML</button>
                    <button className="btn">750 ML</button>
                    <button className="btn">250 ML</button>
                  </div>
                </div> 
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
)
}

export default Customers;
