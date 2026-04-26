import { useState } from "react";
import { Context } from "./createContext";

const CreateContext=({children})=>{
   
    const [apiData, setApiData]=useState();
    return(
      <>
        <Context.Provider value={{apiData, setApiData}}>
          {children}
        </Context.Provider>
      </>
    )
}
export default CreateContext;