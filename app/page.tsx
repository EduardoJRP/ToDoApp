"use client";

import React, {useState} from 'react';

interface ToDoList {
  items: string[];
}

export default function Home() {
  const [toDoList, setToDoList] = useState<ToDoList>({ items: [] });
  const [inputValue, setInputValue] = useState('');

  const addItem = () => { 
    if (inputValue.trim() !== "") {
      setToDoList((prepState) => ({
        items: [...prepState.items, inputValue],
      }));
      setInputValue('');
    } else {
      console.error("Input is empty or not found.")
    }
  };
  
  return (
    <>
      {/* To Do List Title */}
      <div>
        <h1>To Do List!</h1>
      </div>

      {/* New Item to add to the list */}
      <div>
        <label htmlFor="toDoItem">
          Add new Item
          <input 
            type="text" 
            name="toDoItem" 
            id="toDoItem" 
            placeholder='Enter item' 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            />
          <button onClick={addItem}>Add Item</button>
        </label>
        
      </div>

      {/* New Item to add to the list */}
      <ul>
        {toDoList.items.length > 0 ? (
          toDoList.items.map(
            (item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No Items Listed Yet.</li>
          )}
      </ul>
    </>
  );
}
