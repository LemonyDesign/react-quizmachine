import { combineReducers } from 'redux';
import questionsOutput from './questionsOutput';
import answersScore from './answersScore';
import radioSetting from './radioSetting';

export default combineReducers({
  questionsOutput,
  answersScore,
  radioSetting
});
