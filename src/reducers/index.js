import { combineReducers } from 'redux';
import questionsOutput from './questionsOutput';
import answersScore from './answersScore';

export default combineReducers({
  questionsOutput,
  answersScore
});
