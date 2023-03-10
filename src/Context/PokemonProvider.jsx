import React, { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../CustomHook/useLocalStorage'

const PokemonContext = createContext()

export const usePokemonContext = () => useContext(PokemonContext)

export const PokemonProvider = ({children}) => {

  const [nick, setNick] = useLocalStorage('nick', 'player 1');

  const newNick = (event) => {
    setNick(event.target.value)
  }

  return (
    <PokemonContext.Provider value={{ nick, newNick }}>
      {children}
    </PokemonContext.Provider>
  )
}
