import React, {useState, useContext, createContext} from "react";

const PassCodeContext = createContext();

export const PassCodeProvider = ({children}) =>{
    const [passCode, setPassCode] = useState("");

    const updatePassCode = (newPassCode) => {
        setPassCode(newPassCode);
      };
    return(
        <PassCodeContext.Provider value = {{passCode,updatePassCode}}>
            {children}
        </PassCodeContext.Provider>
    )
}
export const usePassCode = ()=>useContext(PassCodeContext)