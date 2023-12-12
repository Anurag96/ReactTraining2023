import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CourseList from './components/CourseList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Course List</h1>
        <CourseList />
      </div>
    </Provider>
  );
};

export default App;
