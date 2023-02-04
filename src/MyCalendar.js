import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./MyCalendar.css";

class MyCalendar extends Component {
  render() {
    return (
      <div className="App">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          //headerToolbar{{}}
          events={[
            {},
            { title: "오늘은 캘린더 작성 날", date: "2023-02-01" },
            { title: "리액트 진도 빼기", date: "2023-02-02" },
          ]}
        />
      </div>
    );
  }

  onClickEvents = (title, date) => {
    let App = document.querySelector("#App");
    let target = App.querySelector(".fc-daygrid-day");
    target.onclick = (e) => {
      alert("event Click");
    };
  };
}

export default MyCalendar;
