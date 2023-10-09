/* eslint-disable react/prop-types */
import  { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
} 

export default UserContextProvider;