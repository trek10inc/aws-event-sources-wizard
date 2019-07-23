import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
import AnswerOption from '../components/AnswerOption';


const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const services = importAll(
  require.context("../api/services", false, /\.(html)$/)
);

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        next={key.next}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        
        <Question icon={props.icon} content={props.question || props.header} />
        <div className="description" dangerouslySetInnerHTML={{__html: services[props.description] || props.description}}></div>
        {
          props.answerOptions && <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
        }

      </div>
    </CSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  icon: PropTypes.string,
};

export default Quiz;
