// // authContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   // Добавьте логику аутентификации здесь

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
