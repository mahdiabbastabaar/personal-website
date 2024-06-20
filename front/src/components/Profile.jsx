// src/components/Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const initialProfile = {
    name: "Mahdi Abbastabaar",
    title: "Software Engineer @ Digikala.com",
    bio: "I'm a 22 years old CE Student in Sharif University of Technology and also a Software Engineer in Digikala.",
    email: "abbastabaar.mahdi1381@gmail.com",
    linkedin: "https://linkedin.com/in/mahdi-abbastabaar",
    github: "https://github.com/mahdiabbastabaar",
    photo: "/profile-photo.jpg"
  };

  const [profile, setProfile] = useState(initialProfile);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/profiles/')
      .then(response => {
        setProfile({ ...response.data[0], photo: initialProfile.photo });
      })
      .catch(error => {
        console.error('There was an error fetching the profile!', error);
      });
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={profile.photo} alt="Profile" className="profile-photo" />
        <div className="profile-details">
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="bio">{profile.bio}</p>
          <div className="contact-info">
            <p>
              <img src="/email-icon.png" alt="Email" className="icon" />
              <a href={`mailto:${profile.email}`}>Email</a>
            </p>
            <p>
              <img src="/linkedin-icon.png" alt="LinkedIn" className="icon" />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p>
              <img src="/github-icon.png" alt="GitHub" className="icon" />
              <a href={profile.github} target="_blank" rel="noopener noreferrer">Github</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
