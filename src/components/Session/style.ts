import styled from 'styled-components';

interface DurationBlock {
  duration: number;
}

const durationToHeight = (duration: number): number => duration * 2;

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid grey;
  border-right: none;
  border-left: none;
`;

const commonProps = `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const InBlock = styled.div<DurationBlock>`
  height: ${({ duration }) => `${durationToHeight(duration)}px`};
  background-color: aqua;
  ${commonProps}
`;

export const OutBlock = styled.div<DurationBlock>`
  height: ${({ duration }) => `${durationToHeight(duration)}px`};
  background-color: teal;
  color: #fff;
  ${commonProps}
`;

export const Movie = styled.div<DurationBlock>`
  ${commonProps}
  flex-direction: column;
  height: ${({ duration }) => `${durationToHeight(duration)}px`};
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

interface IWithError {
  error: boolean;
}

export const Schedule = styled.div<IWithError>`
  color: ${({ error }) => error ? 'red' : 'black'};
`;
