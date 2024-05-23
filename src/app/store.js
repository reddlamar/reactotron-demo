import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reactotron from '../../ReactotronConfig';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  enhancers: getDefaultEnhancers => {
    return getDefaultEnhancers().concat(reactotron.createEnhancer());
  },
});
