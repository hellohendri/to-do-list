//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function App() {
  const [items, setItems] = useState<string>('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setItems(value);
  };

  const addButtonHandler = () => {
    setToDoList((prevValues) => {
      return [...prevValues, items];
    });

    setItems('');
  };

  const deleteItem = (id: number) => {
    setToDoList((prevValues) => {
      const updatedList = [...prevValues];
      updatedList.splice(id, 1);
      return updatedList;
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeHandler} value={items} />
        <button onClick={addButtonHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={item}
              itemValue={items}
              onChecked={()=> deleteItem(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
