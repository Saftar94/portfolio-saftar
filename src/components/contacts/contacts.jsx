import React from "react";

export const Contacts = () => {
  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload("");
  };
  return (
    <div>
      <h1>Hello Contact</h1>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

// export default Contacts;
