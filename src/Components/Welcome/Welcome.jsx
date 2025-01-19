import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Welcome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
             <header className="text-gray-700 text-lg font-medium">
        <p >Welcome Back,</p>
        <h3 className="text-3xl font-bold">{user.displayName}</h3>
      </header>
        </div>
    );
};

export default Welcome;