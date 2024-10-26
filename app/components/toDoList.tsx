import React from 'react';
import ToDoItem from './toDoItem';

interface ToDoListProps {
  items: { description: string; checked: boolean }[];
  deleteListItem: (index: number) => void;
  checkListItem: (index: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
  items,
  deleteListItem,
  checkListItem,
}) => {
  return (
    <ul className="flex flex-col items-center space-y-4 p-6">
      {items.length > 0 ? (
        items.map((item, index) => (
          <ToDoItem
            key={index}
            description={item.description}
            checked={item.checked}
            onDelete={() => deleteListItem(index)}
            onCheck={() => checkListItem(index)}
          />
        ))
      ) : (
        <li className="text-gray-500">No Items Listed Yet.</li>
      )}
    </ul>
  );
};

export default ToDoList;
