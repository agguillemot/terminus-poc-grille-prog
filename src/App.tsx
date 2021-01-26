import React, { useState } from 'react';
import Room from './components/Room';
import { ROOMS } from './data/rooms';

import { Row, Wrapper } from './App-style';
import { ISession } from './types/session';

function App() {
  const [inValue, setIn] = useState<number>(15);
  const [outValue, setOut] = useState<number>(5);

  const [sessions, setSessions] = useState<Record<number, ISession[]>>({
    1: [],
    2: [],
    3: [],
  });

  const addSessionToRoom = (roomIndex: number, newSession: ISession) => {
    setSessions({
      ...sessions,
      [roomIndex]: [...sessions[roomIndex], newSession],
    });
  }

  return (
    <Wrapper>
      <h1>Mercredi 12 novembre 2020 - semaine 32</h1>
      <Row>
        <label htmlFor="input-in">Durée de la première partie (min)</label>
        <input id="input-in" value={inValue} onChange={(e) => setIn(parseInt(e.currentTarget.value, 10))} />
      </Row>
      <Row>
        <label htmlFor="input-out">Durée de l'interséance (min)</label>
        <input id="input-out" value={outValue} onChange={(e) => setOut(parseInt(e.currentTarget.value, 10))} />
      </Row>
      <Row>
        { ROOMS.map((room) => (
          <Room
            key={room.index}
            room={room}
            sessions={sessions[room.index]}
            addSession={(session) => addSessionToRoom(room.index, session)}
          />
        ))}
      </Row>
    </Wrapper>
  );
}

export default App;
