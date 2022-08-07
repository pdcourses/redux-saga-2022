import './App.css';
import UserList from './Components/UserList';
import UserData from './Components/UserData';
import UserPage from './pages/UserPage';
import React, { Component }  from 'react';

function App() {
  return (
    <>
      <UserData />
      <UserPage />
    </>
  );
}

export default App;
