import styled from 'styled-components';

const StyledWrapper = styled.div`
  .header {
    text-align: center;
    // background: -webkit-linear-gradient(45deg, #09009f 20%, #00ff95);
    // background: -webkit-linear-gradient(0deg, #80a3ff 40%, #8770fe);
    background: #db005c;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 1px solid silver;
    -webkit-box-shadow: 0 4px 6px -6px #222;
    -moz-box-shadow: 0 4px 6px -6px #222;
    box-shadow: 0 4px 6px -6px #222;
  }

  .main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    margin-top: 10%;
  }

  .main-container .btn {
    padding: 10px 50px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    // background: -webkit-linear-gradient(0deg, #8770fe 60%, #80a3ff);
    background-color: #db005c;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export default StyledWrapper;
