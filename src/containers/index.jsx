import React from 'react';

import DeviceData from './DeviceData';
import Login from './Login';

import { Switch, Route } from 'react-router-dom';


const SwitchControl = () => {

    return(
        <Switch>
            <Route path = "/">
                <DeviceData/>
            </Route>
        </Switch>
    )
}

export default SwitchControl;