import React from "react";
import Item from "./Item";

function PackingList(props) {
  return (
    <div className="list">
      <ul>
        {props.items.length !== 0 &&
          props.items.map((item) => (
            <Item
              item={item}
              key={item.id}
              deleteItem={props.deleteItem}
              setPacked={props.setPacked}
            />
          ))}
      </ul>
    </div>
  );
}
export default PackingList;
