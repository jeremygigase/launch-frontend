// NPM's
import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom'

// Styling
import './App.css';

// Components
import Register from './components/LoginRegister/Register'
import Login  from './components/LoginRegister/Login'
import Home from './components/Home'
import Navigation from "./components/General/Navigation"
import Profile from './components/Profile'
import CalendarPage from './components/CalendarPage'
import Friends from './components/Friends'
import AddTask from './components/AddTask'
import Footer from './components/General/Footer'

function App() {
  const loggedIn = useSelector(state => state.user.loggedIn);

  return (
      <> 
      {loggedIn ? <Navigation /> : ""}
      <Switch>
      <Route 
          exact
          path="/"              
          render={() => {
          return loggedIn ? <Home /> : <Login />;
            }} />
        <Route
          exact 
          path="/register" 
            render={() => {
              return loggedIn ? <Redirect to="/home" /> : <Register />;
            }}/>
        <Route
            path="/addtask"
            render={() => {
                return loggedIn ? <AddTask /> : <Login />
            }}
            /> 
        <Route
            path="/profile"
            render={() => {
                return loggedIn ? <Profile /> : <Login />
            }}
            />
        <Route
            path="/calendar"
            render={() => {
                return loggedIn ? <CalendarPage /> : <Login />
            }}
            /> 
        <Route
            path="/friends"
            render={() => {
                return loggedIn ? <Friends /> : <Login />
            }}
            /> 
      </Switch>
    <Footer />
      </>
  );
}

export default App;
