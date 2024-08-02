import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ filter }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filteredTasks = tasks.filter((task) =>
    filter === 'all' ? true : filter === 'done' ? task.isDone : !task.isDone
  );

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
