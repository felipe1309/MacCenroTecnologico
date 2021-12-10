import { createContext, useContext, useState } from 'react'
export const ContextoMac = createContext()
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const data = {
    user,
    setUser,
    setUsers,
    users
   }
  // eslint-disable-next-line react/react-in-jsx-scope
  return (<ContextoMac.Provider value={data}>
            {children}
        </ContextoMac.Provider>)
}
export const useContexto = () => {
  const data = useContext(ContextoMac)
  return data
}
