//react core
import React, { useState, useEffect } from 'react';
//videos component
import Videos from './Videos';
//axios instance
import UserApi from '../../api/UserApi';

//VideosPage component
export default function VideosPage({ course, currentUsers }) {
  const [currentUser, setCurrentUser] = useState([]);
  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setCurrentUser(response.data);
    });
  };

  useEffect(() => {
    getUserRole();
  }, []);

  return (
    <div>
      <div className="lecture-banner">Lectures</div>
      <Videos course={course} currentUser={currentUser} />
    </div>
  );
}
