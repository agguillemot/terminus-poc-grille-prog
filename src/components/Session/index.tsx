import React from "react";
import { ISession } from "../../types/session";

const Session = ({ movie, startTime }: ISession) => {

  return (
    <div>
      {movie}
      {startTime}
    </div>
  )
}

export default Session;
