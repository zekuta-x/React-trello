import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import Task from './Task';

const reorder = (taskList, startIndex, endIndex) => {
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
};

const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.draggableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task index={index} task={task} taskList={taskList} setTaskList={setTaskList} />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
