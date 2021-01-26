import React from "react";
import { ISession } from "../../types/session";
import { InBlock, OutBlock, Movie } from './style';
import { MOVIES } from '../../data/movies';

const Session = ({ movie, startTime }: ISession) => {
  const completeMovie = MOVIES.find((m) => m.id === movie);

  return (
    <div>
      <InBlock>Première partie</InBlock>
      <Movie>
        <b>{completeMovie?.title}</b>
        <span>débute à : {startTime}</span>
        <span>{`durée : ${completeMovie?.duration} minutes`}</span>
      </Movie>
      <OutBlock>Interséance</OutBlock>
    </div>
  )
}

export default Session;
