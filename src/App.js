import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddNewIssue from './pages/AddNewIssue'


export default function App() {
    
    return (
        <div>
                <Switch> 
                    <Route path='/' exact component={HomePage} />
                    <Route path='/addnewissue/:owner/:repos' exact component={AddNewIssue} />
                </Switch>
        </div>
    )
}
