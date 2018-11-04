import { combineReducers } from 'redux';
import questionsOutput from './questionsOutput';
import answersScore from './answersScore';
import radioSetting from './radioSetting';
import quizStatus from './quizStatus';
import difficultyLevel from './difficultyLevel';

export default combineReducers({
  questionsOutput,
  answersScore,
  radioSetting,
  quizStatus,
  difficultyLevel
});
