import { createContext, useState } from "react";

export const UserContext = createContext({} as any);

export const UserStorage = ({children}: any) => {
    const [joinHandle, setJoinHandle] = useState(true);
    
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([] as any );
    const [nameID, setNameID] = useState('' as any);






    return(
        <UserContext.Provider value={{ 
            joinHandle, setJoinHandle ,
            name, setName,
            users, setUsers,
            message, setMessage,
            messages, setMessages,
            nameID, setNameID,
    
        }}>
            {children}
        </UserContext.Provider>
    )
}
