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
    <div className="min-h-screen w-full bg-gradient-to-r from-purple-400 to-blue-600">
      {/* To Do List Title */}
      <div className="flex justify-center items-center p-9">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-gray-300 to-gray-800 drop-shadow-lg">
          To Do List!
        </h1>
      </div>

      {/* New Item to add to the list */}
      <div className="flex flex-col space-y-4 items-center">
        <label className="flex flex-col w-full max-w-sm" htmlFor="toDoItem">
          <span className="font-semibold text-lg text-gray-800 p-2 text-center">
            Add a new Item
          </span>
          <input
            type="text"
            name="toDoItem"
            id="toDoItem"
            placeholder="Enter item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            className="mt-2 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold rounded-full py-2 px-6 hover:shadow-lg transition-all duration-300"
            onClick={addItem}
          >
            Add Item
          </button>
        </label>
      </div>

      {/* New Item to add to the list */}
      <ul className="flex flex-col justify-center items-center p-9">
        {toDoList.items.length > 0 ? (
          toDoList.items.map((item, index) => (
            <li className="font-semibold text-md m-2" key={index}>
              {item}
              <button
                className="ml-4 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold rounded-full py-2 px-6 hover:shadow-lg transition-all duration-300"
                onClick={() => deleteItem(index)}
              >
                Delete Item
              </button>
            </li>
          ))
        ) : (
          <li className="font-semibold text-lg">No Items Listed Yet.</li>
        )}
      </ul>
    </div>
  );
}
