import React, { createContext, PropsWithChildren, useContext } from 'react';


interface ICinemaContext {
  inDuration: number;
  outDuration: number;
  openingTime: string;
  closingTime: string;
  totalOpeningTime: number; // in minutes
}

const CinemaContext = createContext<ICinemaContext>({
  inDuration: 15,
  outDuration: 15,
  openingTime: '09:00',
  closingTime: '23:00',
  totalOpeningTime: 840,
});

export const CinemaContextProvider = ({ children, ...props }: PropsWithChildren<ICinemaContext>) => (
  <CinemaContext.Provider value={{ ...props }}>
    {children}
  </CinemaContext.Provider>
);

export const useCinemaContext = () => useContext(CinemaContext);
