import React from "react";
import { ISession } from "../../types/session";
import { DeleteBtn, InBlock, OutBlock, Movie, Wrapper } from './style';
import { MOVIES } from '../../data/movies';

interface ISessionComp {
  session: ISession;
  deleteSession: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Session = ({ session: { movie, startTime }, deleteSession}: ISessionComp) => {
  const completeMovie = MOVIES.find((m) => m.id === movie);

  return (
    <Wrapper>
      <InBlock>Première partie</InBlock>
      <Movie>
        <DeleteBtn onClick={deleteSession}>X</DeleteBtn>
        <b>{completeMovie?.title}</b>
        <span>débute à : {startTime}</span>
        <span>{`durée : ${completeMovie?.duration} minutes`}</span>
      </Movie>
      <OutBlock>Interséance</OutBlock>
    </Wrapper>
  )
}

export default Session;
