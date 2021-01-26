import React, { useState } from 'react';
import Room from './components/Room';
import { ROOMS } from './data/rooms';

import { Row, Wrapper, InputGroup } from './App-style';
import { ISession } from './types/session';
import { CinemaContextProvider } from './contexts/cinema';
import computeOpeningTime from './components/utils/computeOpeningTime';

function App() {
  const [inValue, setIn] = useState<number>(15);
  const [outValue, setOut] = useState<number>(5);
  const [openingTime, setOpeningTime] = useState<string>('09:00');
  const [closingTime, setClosingTime] = useState<string>('23:00');

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
        <InputGroup>
          <label htmlFor="input-in">Première partie</label>
          <input id="input-in" value={inValue} onChange={(e) => setIn(parseInt(e.currentTarget.value, 10))} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="input-out">Interséance</label>
          <input id="input-out" value={outValue} onChange={(e) => setOut(parseInt(e.currentTarget.value, 10))} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="input-opening">heure d'ouverture</label>
          <input id="input-opening" type="time" value={openingTime} onChange={(e) => setOpeningTime(e.currentTarget.value)} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="input-closing">heure de fermeture</label>
          <input id="input-closing" type="time" value={closingTime} onChange={(e) => setClosingTime(e.currentTarget.value)} />
        </InputGroup>
      </Row>
      <Row>
        <CinemaContextProvider inDuration={inValue} outDuration={outValue} totalOpeningTime={computeOpeningTime(openingTime, closingTime)}>
          { ROOMS.map((room) => (
            <Room
              key={room.index}
              room={room}
              sessions={sessions[room.index]}
              addSession={(session) => addSessionToRoom(room.index, session)}
            />
          ))}
        </CinemaContextProvider>
      </Row>
    </Wrapper>
  );
}

export default App;
