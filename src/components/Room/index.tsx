import React from "react";
import { useCinemaContext } from "../../contexts/cinema";
import { IRoom } from "../../types/room";
import { ISession } from "../../types/session";
import AddMovie from "../AddMovie";
import Session from "../Session";
import { Movies, TechInfos, Wrapper, MaxProjectionTime } from './style';
import { MOVIES } from '../../data/movies';
import formatTime from "../utils/formatTime";

interface IRoomComp {
  room: IRoom;
  sessions: ISession[];
  addSession: (session: ISession) => void;
  deleteSession: (session: ISession) => void;
}

const Room = ({ room: { index, seats, screen, sound }, sessions, addSession, deleteSession }: IRoomComp) => {
  const { totalOpeningTime, inDuration, outDuration } = useCinemaContext();

  const totalProjectionTime = sessions.reduce((total, session) => {
    const completeMovie = MOVIES.find((m) => m.id === session.movie);
    const sessionTotalDuration = completeMovie
      ? inDuration + outDuration + completeMovie.duration
      : 0;
    return total += sessionTotalDuration;
  }, 0);

  return (
    <Wrapper>
      <h2>Salle {index}</h2>
      <TechInfos>
        <div>{seats} places</div>
        <div>écran : {screen}</div>
        <div>son : {sound}</div>
      </TechInfos>
      <TechInfos>
        <div>Temps maximal d'ouverture : {formatTime(totalOpeningTime)}</div>        
        <MaxProjectionTime error={totalProjectionTime < totalOpeningTime}>Temps de projection : {formatTime(totalProjectionTime)}</MaxProjectionTime>        
      </TechInfos>
      <Movies>
        <AddMovie onAddMovie={(session) => addSession(session)} />
        { sessions.map((session, index) => <Session key={index} session={session} deleteSession={() => deleteSession(session)} />) }
      </Movies>
    </Wrapper>
  );
}

export default Room;
