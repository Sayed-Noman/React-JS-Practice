// src/components/UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => (
  <div>
    <h3>User Profile</h3>
    {user ? <p>Name: {user.name}</p> : <p>No user data available.</p>}
  </div>
);

export default UserProfile;
