import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Welcome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <header className=" text-lg font-medium font-play">
        <p className="text-primary text-lg">Welcome Back,</p>
        <h3 className="text-4xl font-bold font-pSans md:text-5xl">{user.displayName}</h3>
      </header>
    </div>
  );
};

export default Welcome;
