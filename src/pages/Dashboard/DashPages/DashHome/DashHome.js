import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const DashHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <p className="pt-5 text-center fs-5">Hey <span className="text-success">{user?.displayName}!</span></p>
            <h2 className="pb-5 text-center">Welcome to Your Panel</h2>
            <div className="mt-0 pt-0 text-center"><Link exact to="/">View as a User :-)</Link></div>
    </div>
    )
}

export default DashHome;