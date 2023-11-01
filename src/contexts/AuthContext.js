import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();


export const useAuth = () => {      
      return useContext(AuthContext);
}


const AuthContextProvider = ({ children }) => {
      const [authenticated, setAuthenticated] = useState(false);
      

return (
      <AuthContext.Provider value={{authenticated, setAuthenticated}}>
            {children}
      </AuthContext.Provider>
)
}

export default AuthContextProvider;

