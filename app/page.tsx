"use client";

import React, {useState} from 'react';

export default function Home() {
  const [toDoList, setToDoList] = useState([]);
  
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
          <input type="text" name="toDoItem"/>
        </label>
        
      </div>

      {/* New Item to add to the list */}
      <ul>
        <li>
          Buy the rice
        </li>
        <li>
          Get coffee
        </li>
      </ul>
    </>
  );
}
