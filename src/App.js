import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css'

const App = () => {
  const [filter, setFilter] = useState('all');

  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Todo App</h1>
        <AddTask />
        <div>
          <button onClick={() => setFilter('all')} className='All-btn'>All</button>
          <button onClick={() => setFilter('done')} className='Done-btn'>Done</button>
          <button onClick={() => setFilter('notdone')} className='Not-btn'>Not Done</button>
        </div>
        <ListTask filter={filter} />
      </div>
    </Provider>
  );
};

export default App;
