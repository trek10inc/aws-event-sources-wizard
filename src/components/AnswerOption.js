import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.next === props.answer}
        id={props.next}
        value={props.next}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.next}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  next: PropTypes.string.isRequired
};

export default AnswerOption;
