import { ISession } from "../../types/session";

const timeStrToNumber = (timeStr: string): number => {
  const [hoursStr, minutesStr] = timeStr.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  return minutes + hours * 60;
}

export const sortSessionByStartTime = (session1: ISession, session2: ISession) =>
  timeStrToNumber(session1.startTime) > timeStrToNumber(session2.startTime) ? 1 : -1;
