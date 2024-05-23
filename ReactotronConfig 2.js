import Reactotron from 'reactotron-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.configure({name: 'Redux Demo'})
  .use(reactotronRedux())
  .connect();

export default reactotron;

// Reactotron.setAsyncStorageHandler(AsyncStorage)
//   .configure() // controls connection & communication settings
//   .useReactNative() // add all build-in react native plugins
//   .connect(); // let's connect!
