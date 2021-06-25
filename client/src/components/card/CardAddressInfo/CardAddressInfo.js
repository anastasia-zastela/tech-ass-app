import React from "react";
import * as styles from "./CardAddressInfo.module.scss";
import Rating from "../Rating/Rating";

const CardAddressInfo = ({ addressInfo }) => {
  return (
    <div className={styles.AdressInfoBody}>
      <h3 className={styles.PlaceName}>{addressInfo.place}</h3>
      <Rating value={addressInfo.rating} />
      <p className={styles.AdressInfo}>{addressInfo.address}</p>
      <p
        className={styles.AdressInfo}
      >{`${addressInfo.zipCode} ${addressInfo.state}, ${addressInfo.city}`}</p>
    </div>
  );
};

export default CardAddressInfo;
