import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 250px;
  border: 1px solid grey;
  margin: 0 10px;
  min-height: 650px;
`;

export const TechInfos = styled.div`
  border: 1px solid grey;
  border-left: none;
  border-right: none;
  padding: 8px;
`;

export const Movies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IMaxProjectionTime {
  error: boolean;
}

export const MaxProjectionTime = styled.div<IMaxProjectionTime>`
  color: ${({ error }) => error ? 'green' : 'red' }
`;
