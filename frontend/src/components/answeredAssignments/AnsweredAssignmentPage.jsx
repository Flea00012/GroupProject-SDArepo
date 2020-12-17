import React, { useEffect, useState } from "react";
import AnsAssForm from "../answeredAssignments/AnsweredAssignmentForm";
import AssApi from "../../api/AssignmentsApi";

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
