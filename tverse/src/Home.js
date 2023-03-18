import React from 'react';
import firebase from './firebase';

const Home = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Home;


