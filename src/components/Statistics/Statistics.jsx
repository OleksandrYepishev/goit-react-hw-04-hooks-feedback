import { Fragment } from "react";
import PropTypes from "prop-types";
import { Stats } from "./Statistics.styled";

export const Statistics = (props) => {
  const { good, neutral, bad, total, positiveFeedbacks } = props;

  return (
    <Fragment>
      <Stats>good: {good}</Stats>
      <Stats>neutral: {neutral}</Stats>
      <Stats>bad: {bad}</Stats>
      <Stats>Total: {total}</Stats>
      <Stats>Positive feedback: {positiveFeedbacks}%</Stats>
    </Fragment>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacks: PropTypes.number.isRequired,
};
