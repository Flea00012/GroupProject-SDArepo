//import react core
import React, { Component } from 'react';
//import react big calendar
import { Calendar, momentLocalizer } from 'react-big-calendar';
//import moment for local time standardize
import moment from 'moment';
//import axios instance
import AssignmentsAPI from '../../api/AssignmentsApi';

//import css from big calendar library
import 'react-big-calendar/lib/css/react-big-calendar.css';
//import css for the scheduler page
import "../../css/scheduler.css";

//create localizer for time from moment module
const localizer = momentLocalizer(moment);

export default class Scheduler extends Component {
  state = {
    due: [],
  };

  convertDate = (date) => {
    let newDate = moment(date).add(1, "days");
    return moment.utc(newDate).toDate();
  };

  componentDidMount() {
    AssignmentsAPI.getAll().then((res) => {
      const events = res.data.map((task) => ({
        title: task.assignmentTitle,
        start: this.convertDate(task.createDate),
        end: this.convertDate(task.dueDate),
        allDay: true,
      }));

      this.setState({
        due: events,
      });
    });
  }

  render() {
    const { due } = this.state;

    return (
      <div className="schedular-card">
        <div className="hero-image">
          <div className="container pt-3 pb-3">
            <div className="calendar col-lg-12 col-md-12 col-sm-12 bg-white pt-3 pb-3">
              <Calendar
                defaultDate={moment().toDate()}
                defaultView="month"
                events={due}
                localizer={localizer}
                style={{ height: "100vh" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
