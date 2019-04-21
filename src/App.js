import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: "strictOrdering",
      question: '',
      description: '',
      answerOptions: [],
      answer: '',
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions[this.state.questionId].question,
      description: quizQuestions[this.state.questionId].description,
      answerOptions: quizQuestions[this.state.questionId].answers
    });
  }

  handleAnswerSelected(event) {
    console.log(event.currentTarget.value)
    this.setUserAnswer(event.currentTarget.value);
    setTimeout(() => this.setNextQuestion(), 300);
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answer: answer
    }));
  }

  setNextQuestion() {
    this.setState({
      questionId: this.state.answer,
      question: quizQuestions[this.state.answer].question,
      description: quizQuestions[this.state.answer].description,
      answerOptions: quizQuestions[this.state.answer].answers,
      icon: quizQuestions[this.state.answer].icon || null,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        description={this.state.description}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        icon={this.state.icon}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Which AWS event source should I use?</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
