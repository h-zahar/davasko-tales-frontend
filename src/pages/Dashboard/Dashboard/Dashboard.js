import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import DashHeader from '../DashHeader/DashHeader';
import AddAsAdmin from '../DashPages/AddAsAdmin/AddAsAdmin';
import DashHome from '../DashPages/DashHome/DashHome';
import MakeAdmin from '../DashPages/MakeAdmin/MakeAdmin';
import ManageTales from '../DashPages/ManageTales/ManageTales/ManageTales';
import MyTales from '../DashPages/MyTales/MyTales';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div style={{minHeight: '50vh'}}>
            <DashHeader url={url} />

            <Switch>

                <Route exact path={`${path}`}>
                    <DashHome />
                </Route>

                <Route exact path={`${path}/make`}>
                    <MakeAdmin />
                </Route>

                <Route exact path={`${path}/manage`}>
                    <ManageTales />
                </Route>

                <Route exact path={`${path}/add-as-admin`}>
                    <AddAsAdmin />
                </Route>

                <Route exact path={`${path}/admin-tales`}>
                    <MyTales />
                </Route>

            </Switch>

        </div>
    )
}

export default Dashboard;