import styled from 'styled-components';

const StyledWrapper = styled.div`
  .header {
    text-align: center;
    // background: -webkit-linear-gradient(45deg, #09009f 20%, #00ff95);
    // background: -webkit-linear-gradient(0deg, #db005c 40%, #8770fe);
    background: #db005c;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // border-bottom: 1px solid silver;
    // -webkit-box-shadow: 0 4px 6px -6px #222;
    // -moz-box-shadow: 0 4px 6px -6px #222;
    // box-shadow: 0 4px 6px -6px #222;
  }

  .header h1 {
    font-size: 40px;
    font-weight: 400;
    font-family: sans-serif;
  }

  .main-container {
    display: grid;
    grid-gap: 35px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    width: 50%;
    margin: auto;
    margin-top: 10%;
  }

  .main-container .btn {
    min-width: 230px;
    max-width: fit-content;
    height: 100px;
    border-radius: 5px;
    padding: 10px 50px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    // background: -webkit-linear-gradient(0deg, #db005c 60%, #8770fe);
    background-color: #db005c;
    border: 1px solid #db005c;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 25px 50px 0 rgba(0,0,0,0.19);
    }
  }
`;

export default StyledWrapper;
