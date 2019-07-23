import React from 'react';
import PropTypes from 'prop-types';

const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const icons = importAll(
  require.context("../svg", false, /\.(png|jpe?g|svg)$/)
);

function Question(props) {
  let className = "question";
  if (props.icon) {
    className = "question-big";
  }
  return (
    <h2 className={className}>
      {
        props.icon && <div style={{ display: "inline", verticalAlign: "middle", marginRight: "1rem" }}>
          <img style={{ width: "3rem", height: "3rem" }} src={icons[props.icon]} alt="Service Logo" />
        </div>
      }
      {props.content}
    </h2>
  )
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default Question;
