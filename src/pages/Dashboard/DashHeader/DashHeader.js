import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DashHeader = ({ url }) => {
    const { isAdmin, isAdminLoading } = useAuth();
    return (
        <div>
             <h2 style={{borderBottom: '1px solid rgba(255, 255, 255, 0.2)'}} className="text-center pt-5 pb-3 my-1 bg-light text-dark border"><Link style={{color: 'unset', textDecoration: 'unset'}} to={`${url}`}>
                {
                    !isAdminLoading &&
                    <span>Admin Panel</span>
                }
            </Link></h2>

            <nav className="navbar navbar-expand-lg navbar-light bg-light border">
                <div className="container-fluid">
                    <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">

                        {
                            !isAdminLoading &&
                            <NavLink className="nav-link" exact to={`${url}/make`}>Make Admin</NavLink>
                        }

                        {
                            !isAdminLoading &&
                            <NavLink className="nav-link" exact to={`${url}/manage`}>Manage Tales</NavLink>
                        }

                        {
                            !isAdminLoading &&
                            <NavLink className="nav-link" exact to={`${url}/add-as-admin`}>Add a Tale</NavLink>
                        }

                        {
                            !isAdminLoading &&
                            <NavLink className="nav-link" exact to={`${url}/admin-tales`}>My Tales</NavLink>
                        }

                    </div>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default DashHeader;