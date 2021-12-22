import React, { createContext, useEffect, useState} from 'react'
import { getAuth , provider} from "../config/config";



export const UserAuthContext = createContext();

export const UserAuthProvider = ({children}) => {


    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser , setCurrentUser] = useState(null);

    const auth = getAuth();

    

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
       
    }

    const loginGoogle = () =>{
        return auth.signInWithPopup(provider);
    }


useEffect( () =>{
    if(currentUser){
        setIsAuthenticated(true);
    }else{
        setIsAuthenticated(false);
    }
}, [currentUser])



useEffect(() =>{
    const unsubscribe = auth.onIdTokenChanged((user) =>{
        setCurrentUser(user);
    })
    return () =>{
        unsubscribe();
    }
}, [])


    return (
       <UserAuthContext.Provider value={{
           isAuthenticated,
           setIsAuthenticated,
           login,
           currentUser,
           logout,
           loginGoogle,
       }}>
       {children}
       </UserAuthContext.Provider>
    )
}
