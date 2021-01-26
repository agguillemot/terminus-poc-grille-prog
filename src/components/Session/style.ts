import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const InBlock = styled.div`
  height: 50px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OutBlock = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
