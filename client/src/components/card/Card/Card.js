import React from "react";
import axios from "axios";
import * as styles from "./Card.module.scss";
import CardOverallInfo from "../CardOverallInfo/CardOverallInfo";
import CardAddressInfo from "../CardAddressInfo/CardAddressInfo";
import Button from "../../buttons/Button/Button";
import { BASE_URL } from "../../../constants/urlConstant";

const Card = ({ jobInfo }) => {
  const { date, startTime, endTime, type, salaryPerHour } = jobInfo;
  const { place, rating, address, zipCode, state, city } = jobInfo;

  const refreshPage = () => {
    window.location.reload();
  };

  const cardOverallInfo = {
    date,
    startTime,
    endTime,
    type,
    salaryPerHour,
  };

  const cardAddressInfo = {
    place,
    rating,
    address,
    zipCode,
    state,
    city,
  };

  const onApplyBtnClickHandler = async (id) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/jobs/${id}`, {
        changeAppliedStatus: true,
      });
      alert(data.message);
      refreshPage();
    } catch (error) {
      alert("Error sending apply request");
    }
  };

  const onDeclineBtnClickHandler = async (id) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/jobs/${id}`, {
        changeInvitationStatus: true,
      });
      alert(data.message);
      refreshPage();
    } catch (error) {
      alert("Error sending apply request");
    }
  };

  const buttons = jobInfo.invitationStatus ? (
    <React.Fragment>
      <Button
        action="Decline"
        type="outline"
        onClick={() => onDeclineBtnClickHandler(jobInfo.id)}
      ></Button>
      <Button
        action="Apply"
        type="basic"
        onClick={() => onApplyBtnClickHandler(jobInfo.id)}
      ></Button>
    </React.Fragment>
  ) : (
    <Button
      action="Apply"
      type="basic"
      onClick={() => onApplyBtnClickHandler(jobInfo.id)}
    ></Button>
  );

  return (
    <div
      className={
        jobInfo.invitationStatus
          ? [styles.CardWrapper, styles.CardGreenBorder].join(" ")
          : [styles.CardWrapper, styles.CardBlueBorder].join(" ")
      }
    >
      <div className={styles.CardOverallInfo}>
        <CardOverallInfo overallInfo={cardOverallInfo} />
      </div>
      <div className={styles.CardAddressInfo}>
        <CardAddressInfo addressInfo={cardAddressInfo} />
      </div>
      <div className={styles.ButtonsWrapper}>
        {jobInfo.applied ? <p>Applied</p> : buttons}
      </div>
    </div>
  );
};

export default Card;
