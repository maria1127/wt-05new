import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
