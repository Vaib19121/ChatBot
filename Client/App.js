import React from 'react';
import CustomNavigator from './Navigation/CustomNavigator';
import { Provider } from 'react-redux';
import store from './Store/store';

const App = () => {


  return (
    <Provider store={store}>
      <CustomNavigator />
    </Provider>
  );
};


export default App;
