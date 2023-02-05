import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyCalendar.css";

//구동 전 설치 yarn 설정
//yarn add 기본 fullcalendar 설치
//yarn add @fullcalendar/timegrid
//yarn add @fullcalendar/interaction
//yarn add bootstrap //popover 사용 위함
function MyCalendar() {
  //이벤트 하드 코딩
  const event = [
    {
      title: "치과 예약",
      start: "2023-02-03T08:00:00",
      end: "2023-02-03T09:00:00",
    },
    {
      title: "예비군 당일",
      start: "2023-02-03T08:00:00",
      end: "2023-02-03T09:00:00",
    },
    {
      title: "치과 예약",
      start: "2023-02-03T08:00:00",
      end: "2023-02-03T09:00:00",
    },
    {
      title: "치과 예약",
      start: "2023-02-03T08:00:00",
      end: "2023-02-03T09:00:00",
    },
  ];

  return (
    <div className="App">
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} //플러그인 설치 및 적용
        headerToolbar={{
          start: "prev today", // 이전달, 오늘
          center: "title", // 달력 개월 수
          end: "dayGridMonth,timeGridWeek,timeGridDay next", // 이번주 할일, 날짜 별 할일, 다음달
        }}
        height={"50rem"}
        events={event}
        //hover 시 해당 요소 Popover
        eventDidMount={(info) => {
          return new bootstrap.Popover(info.el, {
            // 요소 el = 엘리먼트 대상을 설명
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            content:
              "<p>안녕하세요 이것은 <strong>" +
              info.event.title +
              "</strong>에 대한 <strong>부트스트랩 Tip PopUp</strong>입니다.</p>",
            html: true,
          });
        }}
        //일정 없이 date 클릭 시 함수 (클릭 시 일정 추가 부분 추가 예정)
        dateClick={(info) => {
          return new bootstrap.Modal(info.el, {});
        }}
        // 이벤트 클릭 시 함수
        // eventClick={(e) => {
        //   alert(e.event.start);
        // }}
        locales={"ko"} // 한글
        editable={true} // 테이블 변경 권한
        dayMaxEvents={true} // 달력에 해당 날짜 여러개 중첩시 + n 개 표시 클릭 시 모든 일정 표기
      />
    </div>
  );
}

export default MyCalendar;
