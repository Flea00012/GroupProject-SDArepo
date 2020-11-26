import React, { useState } from 'react';

import StudentCreateForm from './StudentCreateForm';

import Api from '../../api/Api';

export default function Students() {
  const [student, setStudent] = useState([]);

  const createStudent = (...studentInfo) => {
    Api.post('/students', ...studentInfo).then((res) =>
      setStudent([...student, res.data])
    );
  };

  return (
    <>
      <h3>The list of students is displayed below</h3>
      <StudentCreateForm onCreateClick={createStudent} />
    </>
  );
}
