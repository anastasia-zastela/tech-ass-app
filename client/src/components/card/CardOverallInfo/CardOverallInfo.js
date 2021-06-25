import React from "react";
import * as styles from "./CardOverallInfo.module.scss";

const CardOverallInfo = ({ overallInfo }) => {
  const convertDateToHoursStr = (date) => {
    let hours = date.getHours();
    let mins = date.getMinutes();
    const text = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    mins = mins < 10 ? "0" + mins : mins;
    hours = hours < 10 ? "0" + hours : hours;

    const timeStr = hours + ":" + mins + " " + text;

    return timeStr;
  };

  const convertDateToStr = (date) => {
    const dateArr = date.toString().split(" ");
    return `${dateArr[0]} ${dateArr[2]} ${dateArr[1]}`;
  };

  const formattedDate = convertDateToStr(new Date(overallInfo.date));
  const formattedStartTime = convertDateToHoursStr(
    new Date(overallInfo.startTime)
  );
  const formattedEndTime = convertDateToHoursStr(new Date(overallInfo.endTime));

  return (
    <div className={styles.OverallInfoBody}>
      <h3 className={styles.Date}>{formattedDate}</h3>
      <p
        className={styles.Duration}
      >{`${formattedStartTime} - ${formattedEndTime}`}</p>
      <p className={styles.Type}>{overallInfo.type}</p>
      <p
        className={styles.SalaryPerHour}
      >{`$${overallInfo.salaryPerHour} / hr `}</p>
    </div>
  );
};

export default CardOverallInfo;
