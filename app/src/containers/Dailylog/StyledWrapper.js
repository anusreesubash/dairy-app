import styled from 'styled-components';

const StyledWrapper = styled.div`
  .log-header {
    text-align: center;
  }

  .log-date {
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
  }

  .log-calendar {
    cursor: pointer;
    margin-inline: 10px;
  }

  .entry-div {
    margin-top: 50px;
    text-align: center;
  }

  .entry-btn {
    margin-inline: 10px;
  }

  .date-options {
    display: flex;
    justify-content: space-between;
  }

  .btn-selected {
    background: #8770fe;
    border: 1px solid #8e7cea;
  }

  .btn-option {
    flex: 1;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    margin-right: 0px;
    border-inline: 1px solid white;
  }

  table.log-table tr:nth-child(odd) td{
    /*border-bottom: 1px solid gray;*/
    background-color: #f2f4f7;

  }

  table.log-table {
    text-align: center;
    width: -webkit-fill-available;
    margin-top: 30px;
    margin-bottom: 30px;
    border-collapse: collapse;
  }

  table.log-table tr th {
    font-weight: bold;
    padding: 10px;
    /*border-bottom: 1px solid black;*/
  }

  table.log-table td {
    padding: 5px;
  }

  .input-item {
    padding: 10px;
  }

  .input {
    border-inline: none;
    border-top: none;
    width: 70px;
    font-size: medium;
    border-bottom: 1px solid black;
  }

  .input-label {
    width: 110px;
    display: inline-block;
  }

  .user-name {
    padding: 10px;
    font-size: x-large;
    text-align: center;
  }

  .ml-8 {
    margin-left: 8px;
  }

  .react-datepicker {
    position: absolute;
    right: 0;
    margin-right: 200px;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: ;
    border-bottom: 0px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding-top: 8px;
    position: relative;
  }

  .react-datepicker__day--selected {
    background-color: cornflowerblue;
  }
`;

export default StyledWrapper;

