import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route } from 'react-router-dom';
import DashBoard from '../app/components/personal/DashBoard/DashBoard'


ReactDOM.render((
    <HashRouter>
       <Route path = "/" component = {DashBoard}></Route>
    </HashRouter>
 ), document.getElementById('app'))