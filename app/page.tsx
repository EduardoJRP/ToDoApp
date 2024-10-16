export default function Home() {
  const toDoList = [];
  
  return (
    <>
      {/* To Do List Title */}
      <div>
        <h1>To Do List!</h1>
      </div>

      {/* New Item to add to the list */}
      <div>
        <label>Add new Item</label>
        <input type="text"/>
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
