import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/taskReducer';

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
  
    const handleToggle = () => {
      dispatch(toggleTask(task.id));
    };
  
    const handleEditToggle = () => {
      setIsEditing(!isEditing);
      if (isEditing) {
        dispatch(editTask({ id: task.id, description: newDescription, isDone: task.isDone }));
      }
    };
  
    const handleDescriptionChange = (e) => {
      setNewDescription(e.target.value);
    };
  
    return (
      <div className='container'>
        <input type="checkbox" checked={task.isDone} onChange={handleToggle} className='check'/>
        {isEditing ? (
          <input
            type="text"
            value={newDescription}
            onChange={handleDescriptionChange}
            onBlur={handleEditToggle}
            onKeyPress={(e) => e.key === 'Enter' && handleEditToggle()}
            className='isEditing'
          />
        ) : (
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
        )}
        <button onClick={handleEditToggle} className='edit'>{isEditing ? 'Save' : 'Edit Task'}</button>
      </div>
    );
  };
  
  export default Task;