import React, { useState } from 'react';

import { createContext } from 'react';

export const AuthProvider = createContext()

function AuthContext({children}) {

    const [user,setUser] = useState(null)

  return (
    <AuthProvider.Provider value={{user,setUser}}>
        {children}
    </AuthProvider.Provider>
  );
}

export default AuthContext;
