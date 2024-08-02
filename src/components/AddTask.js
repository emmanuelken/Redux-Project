import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskReducer';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask({ id: uuidv4(), description, isDone: false }));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className='AddTask'>Add Task</button>
    </form>
  );
};

export default AddTask;
