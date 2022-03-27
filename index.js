console.log("hello, vanilla.");

let controlDate = new Date();
let beforeDate = controlDate;
let afterDate = controlDate;
let dayOfTheWeek = controlDate.getDay();
let presentDate = controlDate.getDate();
let presentYear = controlDate.getFullYear();
let presentMonth = controlDate.getMonth();
let calendarNodeList = document.querySelectorAll("tbody > tr > th");
// let calendarNodeListWithoutDay = calendarNodeList.slice(7); / 바보짓

document.querySelector(".dayOfTheWeek").append(matchDayList(dayOfTheWeek));
document.querySelector(".date").append(presentDate);
document.querySelector(".yearAndMonth").innerHTML =
  matchMonthList(presentMonth) + " " + presentYear;
calendarNodeList[presentDate + 1].classList.add("calendarEmphasis");

const leftArrow = document.querySelector(".left.arrow");
const rightArrow = document.querySelector(".right.arrow");

for (i = 0; i < lastDate(controlDate); i++) {
  calendarNodeList[firstDate(controlDate) + i].textContent = i + 1;
}

leftArrow.addEventListener("click", function () {
  // console.log(beforeDate);
  beforeDate.setMonth(beforeDate.getMonth() - 1, 1);
  // console.log(beforeDate);

  dayOfTheWeek = beforeDate.getDay();
  presentDate = beforeDate.getDate();
  presentYear = beforeDate.getFullYear();
  presentMonth = beforeDate.getMonth();

  document.querySelector(".dayOfTheWeek").innerHTML =
    matchDayList(dayOfTheWeek);
  document.querySelector(".date").innerHTML = presentDate;
  document.querySelector(".yearAndMonth").innerHTML =
    matchMonthList(presentMonth) + " " + presentYear;

  calendarNodeList.forEach((item) => {
    item.classList.remove("calendarEmphasis");
  });

  calendarNodeList[dayOfTheWeek].classList.add("calendarEmphasis");

  for (j = 0; j < 42; j++) {
    calendarNodeList[j].textContent = "";
  }

  for (i = 0; i < lastDate(beforeDate); i++) {
    calendarNodeList[firstDate(beforeDate) + i].textContent = i + 1;
  }
});

rightArrow.addEventListener("click", function () {
  // console.log(afterDate);
  afterDate.setMonth(afterDate.getMonth() + 1, 1);
  // console.log(afterDate);

  dayOfTheWeek = afterDate.getDay();
  presentDate = afterDate.getDate();
  presentYear = afterDate.getFullYear();
  presentMonth = afterDate.getMonth();

  document.querySelector(".dayOfTheWeek").innerHTML =
    matchDayList(dayOfTheWeek);
  document.querySelector(".date").innerHTML = presentDate;
  document.querySelector(".yearAndMonth").innerHTML =
    matchMonthList(presentMonth) + " " + presentYear;

  for (j = 0; j < 42; j++) {
    calendarNodeList[j].textContent = "";
  }

  for (i = 0; i < lastDate(afterDate); i++) {
    calendarNodeList[firstDate(afterDate) + i].textContent = i + 1;
  }

  calendarNodeList.forEach((item) => {
    item.classList.remove("calendarEmphasis");
  });

  calendarNodeList[dayOfTheWeek].classList.add("calendarEmphasis");
});

calendarNodeList.forEach((e) => {
  e.addEventListener("click", function () {
    clickCalendarDate = Number(e.innerHTML);
    if (clickCalendarDate === 0) return;
    // console.log(typeof clickCalendarDate);
    changeDate = controlDate;
    // console.log(typeof changeDate);
    changeDate.setDate(clickCalendarDate);

    changeDayOfTheWeek = changeDate.getDay(clickCalendarDate);
    changePresentDate = changeDate.getDate(clickCalendarDate);

    // console.log(changeDayOfTheWeek);
    // console.log(changePresentDate);
    document.querySelector(".dayOfTheWeek").innerHTML =
      matchDayList(changeDayOfTheWeek);
    document.querySelector(".date").innerHTML = changePresentDate;

    calendarNodeList.forEach((item) => {
      item.classList.remove("calendarEmphasis");
    });

    e.classList.add("calendarEmphasis");
  });
});

function matchDayList(e) {
  const dayOfTheWeekList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return dayOfTheWeekList[e];
}

function matchMonthList(e) {
  const monthList = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return monthList[e];
}

function lastDate(e) {
  const findLastDate = e;
  findLastDate.setMonth(findLastDate.getMonth() + 1);
  findLastDate.setDate(0);
  const lastDate = findLastDate.getDate();

  return lastDate;
}

function firstDate(e) {
  const findFirstDate = e;

  findFirstDate.setDate(1);
  startDayOfMonth = findFirstDate.getDay();
  return startDayOfMonth;
}
