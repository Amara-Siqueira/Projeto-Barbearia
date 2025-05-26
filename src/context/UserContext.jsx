import { createContext,useState } from "react";



export const  UserContext = createContext()

    export const UserContextProvider = ({children}) => {
        const [name,setName] = useState("")
        const [email,setEmail] = useState("")
        const [date,setDate] = useState("")

        return(
            <UserContext.Provider value={{name,setName,email,setEmail,date,setDate}}>
                {children}
            </UserContext.Provider>
        )
    }