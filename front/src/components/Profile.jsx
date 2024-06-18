// src/components/Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/profiles/')
      .then(response => {
        setProfile(response.data[0]);  // Assuming there's only one profile
      })
      .catch(error => {
        console.error('There was an error fetching the profile!', error);
      });
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p>{profile.bio}</p>
      <p>Email: {profile.email}</p>
      <p>LinkedIn: <a href={profile.linkedin}>{profile.linkedin}</a></p>
      <p>GitHub: <a href={profile.github}>{profile.github}</a></p>
    </div>
  );
}

export default Profile;
