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
`;

export const Modale = styled.div`
  width: 400px;
  height: 250px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
