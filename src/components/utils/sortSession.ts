import { ISession } from "../../types/session";
import timeStrToMinutes from './timeStrToMinutes';

export const sortSessionByStartTime = (session1: ISession, session2: ISession) =>
  timeStrToMinutes(session1.startTime) > timeStrToMinutes(session2.startTime) ? 1 : -1;
