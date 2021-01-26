import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
`;

export const Modale = styled.div`
  width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
