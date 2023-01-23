import React, { useState, useEffect} from 'react'
import { userContext } from './Contexts';
import Loading from './Loading'

const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    if(token) {
      console.log('useEffect running')
      axios.get('https://myeasykart.codeyogi.io/me', {
        headers: {
          Authorization: token
        },}
      )
      .then(response => {
        console.log('response', response);
        setUser(response.data);
        setLoading(false);
        console.log('Inside useEffect user:',user)
      })
    }
    else { 
      setLoading(false)
    }
    },[])

    if(loading ) {
        return(
          <Loading />
        )
      }
  return (
    <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
  )
}

export default UserProvider