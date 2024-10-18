"use client";

import React, {useState} from 'react';

interface ToDoList {
  items: string[];
}

export default function Home() {
  const [toDoList, setToDoList] = useState<ToDoList>({ items: [] });

  const addItem = () => {
    const inputElement = document.getElementById('toDoItem') as HTMLInputElement;
    console.log(inputElement);

    if (inputElement && inputElement.value.trim() !== "") {
      setToDoList((prepState) => ({
        items: [...prepState.items, inputElement.value],
      }));
      inputElement.value = "";
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
          <input type="text" name="toDoItem" id="toDoItem" placeholder='Enter item'/>
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
