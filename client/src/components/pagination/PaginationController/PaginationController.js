import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as styles from "./PaginationController.module.scss";
import { listAllJobs } from "../../../actions/jobsActions";

const PaginationController = () => {
  const dispatch = useDispatch();

  const startDate = new Date(
    sessionStorage.getItem("currentDate")
      ? sessionStorage.getItem("currentDate")
      : "June 20, 2021"
  );
  const currPage =
    startDate.getDate() === 20 ? 1 : startDate.getDate() === 13 ? 2 : 3;

  const [currentStartDate, setStartDate] = useState(startDate);
  const [currentPage, setCurrentPage] = useState(currPage);

  const getDateNextWeek = (date) => {
    const nextWeek = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 7
    );

    return nextWeek;
  };

  const getDatePrevWeek = (date) => {
    const prevWeek = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 7
    );

    return prevWeek;
  };

  const onClickHandlerLeftArrow = () => {
    if (currentPage >= 3) {
      return;
    }
    setCurrentPage(currentPage + 1);

    const updatedDate = getDatePrevWeek(new Date(currentStartDate));

    setStartDate(updatedDate);
    sessionStorage.setItem("currentDate", updatedDate);
  };

  const onClickHandlerRightArrow = () => {
    if (currentPage <= 1) {
      return;
    }
    setCurrentPage(currentPage - 1);

    const updatedDate = getDateNextWeek(new Date(currentStartDate));

    setStartDate(updatedDate);
    sessionStorage.setItem("currentDate", updatedDate);
  };

  useEffect(() => {
    const dateToFilter = currentStartDate.getDate();

    dispatch(listAllJobs(dateToFilter));
  }, [dispatch, currentPage, currentStartDate]);

  return (
    <div className={styles.PaginationWrapper}>
      <i
        className={`fas fa-chevron-left ${styles.LeftArrow}`}
        onClick={onClickHandlerLeftArrow}
      ></i>
      <h2 className={styles.Date}>
        {currentStartDate.getDate()} - {currentStartDate.getDate() + 7}{" "}
        {startDate.toString().split(" ")[1]}
      </h2>
      <i
        className={`fas fa-chevron-right ${styles.LeftArrow}`}
        onClick={onClickHandlerRightArrow}
      ></i>
    </div>
  );
};

export default PaginationController;
