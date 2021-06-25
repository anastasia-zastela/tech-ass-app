import React from "react";
import * as styles from "./ShiftsScreen.module.scss";

import InvitationJobsList from "../components/lists/InvitationJobsList/InvitationJobsList";
import JobsList from "../components/lists/JobsList/JobsList";
import PaginationController from "../components/pagination/PaginationController/PaginationController";

const ShiftsScreen = () => {
  return (
    <React.Fragment>
      <h1 className={styles.PageTitle}>Shifts</h1>
      <h2 className={styles.SectionTitle}>You&apos;ve been invited</h2>
      <InvitationJobsList />
      <PaginationController />
      <JobsList />
    </React.Fragment>
  );
};

export default ShiftsScreen;
