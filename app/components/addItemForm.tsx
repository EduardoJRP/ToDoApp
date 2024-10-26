import React, { useState } from 'react';

interface AddItemFormProps {
  addItemToList: (description: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ addItemToList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      addItemToList(inputValue);
      setInputValue('');
    }
  };

  return (
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
        onClick={handleSubmit}
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItemForm;
