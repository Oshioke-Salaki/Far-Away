import React, { useState } from "react";

function Form(props) {
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (description === "") return;
    const newItem = { description, qty, packed: false, id: Date.now() };
    props.addItem(newItem);
    setQty(1);
    setDescription("");
  }

  function inputChangeHandler(e) {
    setDescription(e.target.value);
    e.preventDefault();
  }

  function qtyChangeHandler(e) {
    setQty(+e.target.value);
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={qty} name="qty" onChange={qtyChangeHandler}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={inputChangeHandler}
        name="description"
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
