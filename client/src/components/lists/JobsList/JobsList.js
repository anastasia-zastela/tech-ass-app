import React from "react";
import { useSelector } from "react-redux";
import Card from "../../card/Card/Card";
import Loader from "../../other/Loader";
import Message from "../../other/Message";

const JobsList = () => {
  const jobsList = useSelector((state) => state.jobsList);
  const { loading, error, jobs } = jobsList;

  const cards = jobs
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((el) => <Card key={el.id} jobInfo={el} />);

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

export default JobsList;
