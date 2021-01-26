import React, { useEffect, useState } from "react";
import { AddBtn, Backdrop, CloseBtn, Modale } from './style';
import { MOVIES } from '../../data/movies';
import { ISession } from "../../types/session";

interface IAddMovie {
  onAddMovie: (session: ISession) => void;
}

const AddMovie = ({ onAddMovie }: IAddMovie) => {
  const [isOpen, openModal] = useState<boolean>(false);
  const [selectedMovie, selectMovie] = useState<string | undefined>(undefined);
  const [selectedTime, selectTime] = useState<string | undefined>('10:00');

  const formIsComplete = selectedMovie !== undefined && selectedTime !== undefined;

  useEffect(() => {
    // reset
    selectMovie(undefined);
    selectTime('10:00');
  }, [isOpen]);

  const onSubmit = () => {
    openModal(false);
    if (formIsComplete) { onAddMovie({ movie: selectedMovie!, startTime: selectedTime! }); }
  }

  return (
    <>
      { isOpen && (
        <Backdrop>
          <Modale>
            <CloseBtn onClick={() => openModal(false)}>X</CloseBtn>
            <select onChange={(e) => selectMovie(e.currentTarget.value)}>
              <option value="">Choisir un film</option>
              { MOVIES.map((movie) => <option key={movie.id} value={movie.id}>{movie.title}</option>) }
            </select>
            <input type="time" value={selectedTime} onChange={(e) => selectTime(e.currentTarget.value)} />
            <button type="button" onClick={onSubmit} disabled={!formIsComplete}>Valider</button>
          </Modale>
        </Backdrop>
      )}
      <AddBtn type="button" onClick={() => openModal(true)}>+</AddBtn>
    </>
  )
};

export default AddMovie;
