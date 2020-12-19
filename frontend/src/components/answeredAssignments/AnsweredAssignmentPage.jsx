//react core
import React, { useEffect, useState } from 'react';

//answeredAssignmentForm component
import AnsAssForm from '../answeredAssignments/AnsweredAssignmentForm';
//axios instance
import AssApi from '../../api/AssignmentsApi';

//AnsweredAssignmentPage component
export default function AnsweredAssignmentPage() {
  const [assignments, setAssignments] = useState([]);

  const getAll = () => {
    AssApi.getAllAssignment().then((response) => setAssignments(response.data));
  };

  useEffect(() => {
    getAll();
  }, []);

  const assignmentsDue = assignments.map((assignment) => {
    return <AnsAssForm key={assignment.id} assignmentsDue={assignment} />;
  });

  const assignmentTitles = assignments.map(
    (assignment) => assignment.assignmentTitle
  );

  return (
    <>
      <div>
        <AnsAssForm></AnsAssForm>
      </div>
    </>
  );
}

