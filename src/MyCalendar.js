import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./MyCalendar.css";

class MyCalendar extends Component {
  render() {
    return (
      <div className="App">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={[
            { title: "오늘은 캘린더 작성 날", date: "2023-02-01" },
            { title: "리액트 진도 빼기", date: "2023-02-02" },
          ]}
          monthName={[
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
          ]}
        />
      </div>
    );
  }
}
let App = document.querySelector("#App");
let event = App.querySelector("a");
event.onclick = (e) => {
  alert(e);
};

export default MyCalendar;
