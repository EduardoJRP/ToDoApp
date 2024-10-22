'use client';

import React, { useState } from 'react';

interface ToDoList {
  items: string[];
}

export default function Home() {
  const [toDoList, setToDoList] = useState<ToDoList>({ items: [] });
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setToDoList((prepState) => ({
        items: [...prepState.items, inputValue],
      }));
      setInputValue('');
    } else {
      console.error('Input is empty or not found.');
    }
  };

  const deleteItem = (index: number) => {
    setToDoList((prepState) => ({
      items: prepState.items.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-purple-400 to-blue-600">
      {/* To Do List Title */}
      <div className="flex flex-col w-full max-w-md mx-auto border-none rounded-lg shadow-lg bg-white">
        <div className="flex justify-center items-center p-6 bg-gradient-to-r from-blue-600 to-purple-400 rounded-t-lg">
          <h1 className="text-3xl font-bold text-white">To Do List!</h1>
        </div>

        {/* New Item to add to the list */}
        <div className="flex flex-col p-6 space-y-4">
          <label className="flex flex-col w-full" htmlFor="toDoItem">
            <span className="font-semibold text-lg text-gray-800">
              Add a new Item
            </span>
            <input
              type="text"
              name="toDoItem"
              id="toDoItem"
              placeholder="Enter item"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </label>
          <button
            className="w-full bg-purple-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-purple-600 transition-all"
            onClick={addItem}
          >
            Add Item
          </button>
        </div>

        {/* List of Items */}
        <ul className="flex flex-col items-center space-y-4 p-6">
          {toDoList.items.length > 0 ? (
            toDoList.items.map((item, index) => (
              <li
                className="w-full flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
                key={index}
              >
                <span className="text-gray-800 font-medium">{item}</span>
                <button
                  className="text-sm bg-red-500 text-white rounded-full px-4 py-1 hover:bg-red-600 transition-all"
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No Items Listed Yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
