import React, { useState, createContext, useContext } from "react";
// import useContext and createContext
const AppContext = createContext(null); 
//create context

export default function Parent ()  {
  const [userName, setUserName] = useState("PedroTech");

  return (
    <AppContext.Provider value={{ userName, setUserName }}> 
      <Child1 />
      <Child2 />
    </AppContext.Provider>
  );
};

function Child1 () {
  const { userName } = useContext(AppContext);

  return <h1> {userName} </h1>;
};

 function Child2 () {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button
        onClick={() => {
          setUserName("PedroTechnologies");
        }}
      >
        Change Username
      </button>
    </div>
  );
};