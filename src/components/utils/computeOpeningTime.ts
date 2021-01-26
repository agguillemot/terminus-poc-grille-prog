import { parse, differenceInMinutes } from "date-fns";

const computeOpeningTime = (openingTime: string, closingTime: string) => (
  differenceInMinutes(parse(closingTime, 'HH:mm', new Date()), parse(openingTime, 'HH:mm', new Date()))
);

export default computeOpeningTime;
