import React from "react";
import { ISession } from "../../types/session";
import { DeleteBtn, InBlock, OutBlock, Movie, Wrapper } from './style';
import { MOVIES } from '../../data/movies';
import { useCinemaContext } from "../../contexts/cinema";

interface ISessionComp {
  session: ISession;
  deleteSession: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Session = ({ session: { movie, startTime }, deleteSession}: ISessionComp) => {
  const completeMovie = MOVIES.find((m) => m.id === movie);
  const { inDuration, outDuration } = useCinemaContext();

  return (
    <Wrapper>
      <InBlock duration={inDuration}>Première partie</InBlock>
      <Movie duration={completeMovie?.duration || 0}>
        <DeleteBtn onClick={deleteSession}>X</DeleteBtn>
        <b>{completeMovie?.title}</b>
        <span>{`début ${startTime} / durée ${completeMovie?.duration} minutes`}</span>
      </Movie>
      <OutBlock duration={outDuration}>Interséance</OutBlock>
    </Wrapper>
  )
}

export default Session;
