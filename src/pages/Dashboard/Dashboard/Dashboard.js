import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import DashHeader from '../DashHeader/DashHeader';
import DashHome from '../DashPages/DashHome/DashHome';
import MakeAdmin from '../DashPages/MakeAdmin/MakeAdmin';
import Header from '../../Shared/Header/Header';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div style={{minHeight: '50vh'}}>
            <Header />
            <DashHeader url={url} />

            <Switch>

                <Route exact path={`${path}`}>
                    <DashHome />
                </Route>

                <Route exact path={`${path}/make-admin`}>
                    <MakeAdmin />
                </Route>

            </Switch>

        </div>
    )
}

export default Dashboard;