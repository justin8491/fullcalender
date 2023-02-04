import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyCalendar.css";

function MyCalendar() {
  const event = [
    {
      title: "이벤트 버튼",
      start: "2023-02-03T08:00:00",
      end: "2023-02-05T09:00:00",
    },
  ];

  return (
    <div className="App">
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: "prev today", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay next", // will normally be on the right. if RTL, will be on the left
        }}
        height={"30rem"}
        events={event}
        eventDidMount={(info) => {
          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            content:
              "<p>안녕하세요 이것은 <strong>부트스트랩 Tip PopUp</strong>입니다.</p>",
            html: true,
          });
        }}
        eventClick={(e) => {
          alert(e.event.start);
          console.log(e.event.start);
        }}
      />
    </div>
  );
}

export default MyCalendar;
