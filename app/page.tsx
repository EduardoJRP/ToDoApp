'use client';

import React, { useState } from 'react';
import ToDoList from './components/toDoList';
import AddItemForm from './components/addItemForm'

interface ToDoItem {
  description: string;
  checked: boolean;
}

export default function Home() {
  const [toDoList, setToDoList] = useState<ToDoItem[]>([]);

  const addItemToList = (description: string) => {
    const newItem: ToDoItem = { description, checked: false };
    setToDoList((prevState) => [...prevState, newItem]);
  };

  const deleteListItem = (index: number) => {
    setToDoList((prepState) => ( prepState.filter((_, i) => i !== index )));
  };

  const checkListItem = (index: number) => {
    setToDoList((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-purple-400 to-blue-600">
      <div className="flex flex-col w-full max-w-md mx-auto border-none rounded-lg shadow-lg bg-white">
        <div className="flex justify-center items-center p-6 bg-gradient-to-r from-blue-600 to-purple-400 rounded-t-lg">
          <h1 className="text-3xl font-bold text-white">To Do List!</h1>
        </div>
        <AddItemForm addItemToList={addItemToList} />
        <ToDoList
          items={toDoList}
          deleteListItem={deleteListItem}
          checkListItem={checkListItem}
        />
      </div>
    </div>
  );
}
