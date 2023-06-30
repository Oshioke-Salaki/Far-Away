import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const numItems = items.length;
  const numPacked = items.reduce((acc, cur) => (cur.packed ? acc + 1 : acc), 0);

  function addItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((cur) => cur.id !== id));
  }

  function setPacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        setPacked={setPacked}
      />
      <Stats numItems={numItems} numPacked={numPacked} items={items} />
    </div>
  );
}

export default App;
