// src/context/GlobalContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const GlobalContext = createContext();

// Crear el proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState(0);
  const [Materia, setMateria] = useState(1);
  const [SubComp, setSubComp] = useState(0);
  const [VarMateria, setVarMateria] = useState(0);
  const [VarTema, setVarTema] = useState(0);

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable, Materia, setMateria, SubComp, setSubComp, VarMateria, setVarMateria, VarTema, setVarTema }}>
      {children}
    </GlobalContext.Provider>
  );
};