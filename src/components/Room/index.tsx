import React from "react";
import { IRoom } from "../../types/room";
import { ISession } from "../../types/session";
import AddMovie from "../AddMovie";
import Session from "../Session";
import { Movies, TechInfos, Wrapper } from './style';

interface IRoomComp {
  room: IRoom;
  sessions: ISession[];
  addSession: (session: ISession) => void;
}

const Room = ({ room: { index, seats, screen, sound }, sessions, addSession }: IRoomComp) => {
  return (
    <Wrapper>
      <h2>Salle {index}</h2>
      <TechInfos>
        <div>{seats} places</div>
        <div>écran : {screen}</div>
        <div>son : {sound}</div>
      </TechInfos>
      <Movies>
        { sessions.map((session) => <Session key={session.movie} {...session} />) }
        <AddMovie onAddMovie={(session) => addSession(session)} />
      </Movies>
    </Wrapper>
  );
}

export default Room;
