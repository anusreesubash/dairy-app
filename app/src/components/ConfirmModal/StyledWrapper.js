import styled from 'styled-components';

const Wrapper = styled.div`
  &.modal--animate-out{
    animation: fade-out 0.5s forwards cubic-bezier(.19,1,.22,1);

    .modal-card {
      animation: fade-and-slide-out-from-top .50s forwards cubic-bezier(.19,1,.22,1);
    }
  }

  &.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    overflow-y: auto;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 1003;
  }

  .modal-card {
    -webkit-animation-duration: .85s;
    animation-duration: .85s;
    -webkit-animation-delay: .1s;
    animation-delay: .1s;
    background: var(--color-background-top);
    border-radius: var(--border-radius);
    position: relative;
    z-index: 1003;
    max-width: calc(100% - var(--spacing-base-unit));
    -webkit-box-shadow: var(--box-shadow-base);
    box-shadow: var(--box-shadow-base);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    will-change: opacity,transform;
    -ms-flex-positive: 0;
    flex-grow: 0;
    margin: 3vh 10vw;
    margin-top: 50px;

    &.modal-sm {
      min-width: 300px;
    }

    &.modal-md {
      min-width: 500px;
    }

    &.modal-lg {
      min-width: 800px;
    }

    &.modal-xl {
      min-width: 1140px;
    }

    animation: fade-and-slide-in-from-top .50s forwards cubic-bezier(.19,1,.22,1);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-modal-header);
    font-family: var(--bold-text-font-family);
    padding: 12px;
    font-weight: 600;
    background-color: white;
    /* border-bottom: solid 1px #ececec; */
    border-bottom: solid 1px #e5e5e5;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    .close {
      font-size: 1.3rem;
      line-height: 1;
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity: 0.5;
      margin-top: -2px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .modal-content {
    padding: 20px;
    flex-grow: 1;
    background-color: #fff;
  }

  .modal-backdrop {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: fixed;
    opacity: 0.8;
    will-change: opacity;
    background: transparent;

    &:before{
      content: "";
      height: 100%;
      width: 100%;
      left: 0;
      opacity: .5;
      top: 0;
      background: black;
      position: fixed;
    }

    animation: fade-in .1s forwards cubic-bezier(.19,1,.22,1);
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    background-color: white;
    border-top: 1px solid #e5e5e5;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .modal-header {
    font-size: 20px;
  }

  .submit {
    background-color: crimson;
    border: 1px solid red;
  }
`;

export default Wrapper;
