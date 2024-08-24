import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../components/firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentuser, setCureentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading,setLoading] = useState(true);

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,initializeUser);
    return unsubscribe;
   },[])
   async function initializeUser(user) {
    if(user){
        setCureentUser({ ...user });
        setUserLoggedIn(true);
       
    }else{
        setCureentUser(null);
        setUserLoggedIn(false);
      
    }
    setLoading(false);
   }

   const value ={
    currentuser,
    userLoggedIn,
    loading,
   }
   return(
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
   )
}
