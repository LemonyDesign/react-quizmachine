import { combineReducers } from 'redux';
import questionsOutput from './questionsOutput';
import answersScore from './answersScore';
import answersChecked from './answersChecked';
import quizStatus from './quizStatus';
import difficultyLevel from './difficultyLevel';

export default combineReducers({
  questionsOutput,
  answersScore,
  answersChecked,
  quizStatus,
  difficultyLevel
});
