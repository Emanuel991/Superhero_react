import { createContext, useState } from "react";

const HeroContext = createContext();


export const HeroProvider = ({children}) => {
    const [team, setTeam] = useState([]);
    return(
        <HeroContext.Provider value={{team, setTeam}}>
        {children}
        </HeroContext.Provider>
    )
}

export default HeroContext;