import React from 'react';

const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const taskCardDeleteButton = (id) => {
    console.log(taskCard);
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() => taskCardDeleteButton(taskCard.id)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
