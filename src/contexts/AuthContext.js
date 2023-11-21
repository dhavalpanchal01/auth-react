import { createContext, useContext, useState } from "react";



export const AuthContext = createContext();


export const useAuth = () => {      
      return useContext(AuthContext);
}


const AuthContextProvider = ({ children }) => {
      const [authenticated, setAuthenticated] = useState(false);
      // console.log('children',children);  

return (
      <AuthContext.Provider value={{authenticated, setAuthenticated}}>
            {children}
      </AuthContext.Provider>
)
}

export default AuthContextProvider;

