import React, { useState } from 'react';
import Modal from '../../components/Modal'
import ConfirmModal from '../../components/ConfirmModal'
import StyledWrapper from './StyledWrapper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import moment from 'moment';

const DailyLog = () => {
  const [openLog, setOpenLog] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [logDate, setLogDate] = useState(moment(new Date()).format('Do MMMM YYYY'));

  const handleOpenEdit = () => {
    setEditModalOpen(true);
  }

  const handleOpenOptions = (e) => {
    setOptionsOpen(true);
  }

  const handleOpenConfirmModal = (e) => {
    setConfirmModalOpen(true);
  }

  const handleDateSelect = (date) => {
    setStartDate(date);
    let logDate = moment(new Date(date)).format('Do MMMM YYYY');
    setLogDate(logDate);
    setDatePickerOpen(false);
  }

  return  (
    <StyledWrapper className="dailylog">
      <h1 className="log-header">Daily Customer Log</h1>
      <div className="log-date">
        {logDate &&(
          <p>{logDate}</p>
        )}
        <div className="log-calendar" onClick={() => setDatePickerOpen(true)}> <FontAwesomeIcon className="icon fa-md" icon={faCalendar}/> </div>
      </div>
      {datePickerOpen &&(
        <DatePicker
          selected={startDate}
          onChange={handleDateSelect}
          inline
          clasName="react-datepicker"
        />
      )}
      {/*<div className="entry-div">
        No entries found!
        <button className="entry-btn btn">Make entry</button>
      </div>*/}
      <div className="date-options">
        <button className="btn-option btn btn-selected" onClick={() => setOpenLog(true)}>Yesterday</button>
        <button className="btn-option btn" onClick={() => setOpenLog(true)}>Today</button>
        <button className="btn-option btn" onClick={() => setOpenLog(true)}>Tomorrow</button>
      </div>
      {openLog ? (
        <table className="log-table">
          <thead style={{padding: '20px'}}>
            <tr>
              <th>Sl. No.</th>
              <th>Name</th>
              <th>Item</th>
              <th>Qty(AM)</th>
              <th>Qty(PM)</th>
              <th>Edit Entry</th>
              <th>Remove Entry</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Anoop</td>
              <td>Milk</td>
              <td>1 L</td>
              <td>-</td>
              <td><button className="btn btn-edit" onClick={handleOpenEdit}>Edit</button></td>
              <td><button className="btn" onClick={handleOpenConfirmModal}>Remove</button></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Anusree</td>
              <td>Milk</td>
              <td>-</td>
              <td>500 ML</td>
              <td><button className="btn">Edit</button></td>
              <td><button className="btn" onClick={handleOpenConfirmModal}>Remove</button></td>
            </tr>
          </tbody>
        </table>
      ): null}
      {editModalOpen && (
        <Modal title="Edit" size="md" handleClose={() => setEditModalOpen(false)}>
          <div className="flex">
            <div className="user-name">
              Anusree
            </div>
            <div className="input-item">
              <label id="quantity(am)" className="quantity input-label">Quantity(AM):</label>
              <button className="btn">1 l</button>
              <button className="btn">500 ml</button>
              <button className="btn">750 ml</button>
              <button className="btn ml-8">custom</button>
            </div>
            <div className="input-item">
              <label id="quantity(pm)" className="quantity input-label">Quantity(PM):</label>
              <button className="btn">1 l</button>
              <button className="btn">500 ml</button>
              <button className="btn">750 ml</button>
              <button className="btn ml-8">custom</button>
            </div>
          </div>
        </Modal>
      )}
      {confirmModalOpen && (
        <ConfirmModal title="Confirm" size="sm" body="Are you sure to delete this entry?" confirmText="Delete" handleCancel={() => setConfirmModalOpen(false)} handleConfirm={() => setConfirmModalOpen(false)}/>
      )}
    </StyledWrapper>
  );
}

export default DailyLog;