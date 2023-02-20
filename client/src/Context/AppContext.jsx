import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { createContext } = require("react");

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [changeVariable,setChangeVariable]=useState(false)
  const navigate = useNavigate();
                
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userInfo"));
   
    if (!token) navigate("/auth");
    setUserInfo(token);
  }, [navigate,changeVariable]);

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo,setChangeVariable,changeVariable }}>
      {children}
    </AppContext.Provider>
  );
}
