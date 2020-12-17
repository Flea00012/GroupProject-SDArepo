import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import AssignmentsApi from "../../api/AssignmentsApi";
import DeleteIcon from "@material-ui/icons/Delete";
import UserApi from "../../api/UserApi";

import AssignmentGrade from "../answeredAssignments/AssignmentGrade";

const columns = [
  {
    id: "title",
    label: "Assignments",
    minWidth: 150,
    color: "white",
    fontSize: "calc(10px + 2vmin)",
  },
  {
    id: "dueDate",
    label: "Deadline*",
    minWidth: 100,
    color: "white",
    fontSize: "calc(6px + 2vmin)",
  },
  {
    id: "ICONS",
    label: "",
    minWidth: 150,
    color: "black",
    fontSize: "calc(10px + 2vmin)",
  },
];

function createData(title, Id, dueDate) {
  return { title, Id, dueDate };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 300,
  },
  assignmentRowData: {
    backgroundColor: ":#E3E2DF",
    borderWidth: 8,
    borderColor: "#E3E2DF",
    borderStyle: "solid",
  },
  assignmentBody: {},
  tablePagination: {
    backgroundColor: "#E3E2DF",
    color: "black",
  },
});

function AssignmentsView({ course, currentUsers }) {
  const [rows, setRows] = useState([]);

  const handleDelete = ({ assignId }) => {
    AssignmentsApi.deleteAssignment(assignId).then((response) => {
      window.location.reload();
    });
  };

  const viewAssignment = (course) => {
    if (typeof course !== "undefined" && course !== "") {
      AssignmentsApi.getAllAssignment(course.id).then((response) => {
        const newArray = response.data.map((item) =>
          createData(item.assignmentTitle, item.id, item.dueDate)
        );
        setRows(newArray.reverse());
      });
    } else {
      AssignmentsApi.getAll().then((response) => {
        const newArray = response.data.map((item) =>
          createData(item.assignmentTitle, item.id, item.dueDate)
        );
        setRows(newArray.reverse());
      });
    }
  };

  useEffect(() => {
    getUserRole();
    viewAssignment(course);
  }, [course]);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentUser, setCurrentUser] = useState(" ");
  const [userId, setUserId] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Get userRole call
  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setCurrentUser(response.data.userRole);
      setUserId(response.data.id);
    });
  };

  return (
    <>
      <div>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        color: column.color,
                        fontSize: column.fontSize,
                        backgroundColor: "#2E9CCA",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className={classes.assignmentBody}>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          const assignId = row["Id"];
                          return (
                            <TableCell
                              className={classes.assignmentRowData}
                              key={column.id}
                              align={column.align}
                            >
                              {column.id === "title" ? (
                                <Link
                                  className="link"
                                  to={
                                    currentUser === "teacher"
                                      ? `/assignmentsView/${assignId}`
                                      : typeof course === "undefined"
                                      ? `/assignmentsAnsweredView/${assignId}`
                                      : `/assignmentsAnsweredView/${assignId}/${course.id}`
                                  }
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </Link>
                              ) : null}
                              {currentUser === "teacher" ? (
                                <div>
                                  {column.id === "ICONS" ? (
                                    <DeleteIcon
                                      fontSize="small"
                                      onClick={() => handleDelete({ assignId })}
                                    />
                                  ) : null}
                                </div>
                              ) : (
                                <div>
                                  {column.id === "ICONS" ? (
                                    <div>
                                      <AssignmentGrade
                                        key={assignId + "," + userId}
                                        assignmentId={assignId}
                                        userId={userId}
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              )}
                              {column.id === "dueDate" ? value : null}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            className={classes.tablePagination}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}

export default AssignmentsView;
