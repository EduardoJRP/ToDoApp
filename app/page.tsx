'use client';

import React, { useState } from 'react';

interface ToDoList {
  items: ToDoItem[];
}

interface ToDoItem {
  description: string;
  marked: boolean;
}

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState<ToDoList>({ items: [] });

  const addItemToList = () => {
    if (inputValue.trim() !== '') {
      const newItem: ToDoItem = {
        description: inputValue,
        marked: false,
      };

      setToDoList((prevState) => ({
        items: [...prevState.items, newItem],
      }));
      setInputValue('');
    } else {
      console.error('Input is empty or not found.');
    }
  };

  const deleteListItem = (index: number) => {
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
            onClick={addItemToList}
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
                <span className="text-gray-800 font-medium">
                  {item.description}
                </span>
                <button
                  className="text-sm bg-red-500 text-white rounded-full px-4 py-1 hover:bg-red-600 transition-all"
                  onClick={() => deleteListItem(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
                <button
                  className="text-sm bg-green-500 text-white rounded-full px-4 py-1 hover:bg-red-600 transition-all"
                  onClick={() => deleteListItem(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
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
