import PropTypes from "prop-types";
import { Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const createBtn = (option) => (
    <Btn key={option} type="button" onClick={() => onLeaveFeedback(option)}>
      {option}
    </Btn>
  );

  return Object.keys(options).map(createBtn);
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({}).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
