import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listInvitedJobs } from "../../../actions/jobsActions";
import Card from "../../card/Card/Card";
import Loader from "../../other/Loader";
import Message from "../../other/Message";

const InvitationJobsList = () => {
  const dispatch = useDispatch();

  const invitedJobsList = useSelector((state) => state.invitedJobsList);
  const { loading, error, invitedJobs } = invitedJobsList;

  useEffect(() => {
    dispatch(listInvitedJobs());
  }, [dispatch]);

  const cards = invitedJobs.map((el) => <Card key={el.id} jobInfo={el} />);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        cards
      )}
    </React.Fragment>
  );
};

export default InvitationJobsList;
