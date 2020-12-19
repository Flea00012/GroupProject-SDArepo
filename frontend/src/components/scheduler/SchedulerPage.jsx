//react core
import React, { useState, useEffect } from 'react';
//import calendar object into page
import Scheduler from './Scheduler';
//import axios instance
import UserApi from '../../api/UserApi';

export default function SchedulerPage() {
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
      <div className="sheduler-banner">Scheduler</div>
      <hr />
      <Scheduler currentUser={currentUser} />
    </div>
  );
}
